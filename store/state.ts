/**
 * This file is used to define the global state of the application.
 */
import { defineStore } from "pinia";
import type { TokenSet } from "~/types/tokenSet";
import type { Volo_Abp_AspNetCore_Mvc_ApplicationConfigurations_ApplicationConfigurationDto } from "~/services/proxy/src";
import type { GrantedPolicyType } from "~/types/grantedPolicies";
import { useTenants } from "./tenantStore";
import { useFeatures } from "./featureStore";
import { useProfile } from "./profileStore";
import { useToast } from "./toastStore";

type TokenSetState = { jwt?: TokenSet };
export const getAbpServiceProxy = () => "/api/abpServiceProxy";

const useTokenSet = defineStore("tokenSet", {
  state: () => ({
    accessToken: "",
    tokenType: "",
    expiresAt: 0,
    idToken: "",
    scope: "",
  }),
  actions: {
    async fetch() {
      const { data, error } = await useFetch("/api/jwt");
      const response: TokenSetState = data.value as TokenSetState;
      if (response.jwt) {
        this.accessToken = response.jwt.access_token;
        this.tokenType = response.jwt.token_type;
        this.expiresAt = response.jwt.expires_at;
        this.idToken = response.jwt.id_token;
        this.scope = response.jwt.scope;
      }

      if (error) {
        return createError({
          statusCode: 401,
          message: "Unauthorized: Please login.",
        });
      }
    },
  },
});

type AbpConfigurationState = {
  config: Volo_Abp_AspNetCore_Mvc_ApplicationConfigurations_ApplicationConfigurationDto | null;
  error: { message: string; statusCode: number } | null;
  grantedPolicies: Map<GrantedPolicyType, boolean> | null;
};

const useAbpConfiguration = defineStore("abpConfiguration", {
  state: (): AbpConfigurationState => {
    return {
      config: null,
      error: null,
      grantedPolicies: null,
    };
  },

  actions: {
    async fetch() {
      const url = `${getAbpServiceProxy()}/abp/application-configuration`;
      const { data, error } = await useFetch(url);

      if (error.value) {
        this.error = {
          message: error.value.statusMessage,
          statusCode: error.value.statusCode,
        } as AbpConfigurationState["error"];
      }
      const response = data.value as AbpConfigurationState["config"];
      if (response) {
        this.config = response;

        if (response.auth?.grantedPolicies) {
          const keys = Object.entries(response.auth.grantedPolicies);
          this.grantedPolicies = new Map<GrantedPolicyType, boolean>();
          for (const [key, value] of keys) {
            const localKey =
              `is${key.split(".").join("")}` as GrantedPolicyType;
            this.grantedPolicies.set(localKey, value);
          }
        }
      }
    },
  },
});

type DeleteDialogState = {
  isOpen: boolean;
  id: string;
  message: string;
  isLoading: boolean;
  error: { message: string; statusCode: number } | null;
};
const useDeleteDialog = defineStore("deleteDialog", {
  state: (): DeleteDialogState => {
    return {
      isOpen: false,
      id: "",
      message: "",
      isLoading: false,
      error: null,
    };
  },
  actions: {
    async showDialog(id: string, message: string) {
      this.id = id;
      this.message = message;
      this.isOpen = true;
    },
    async deleteRecord(apiUrl: string) {
      const url = `${getAbpServiceProxy()}/${apiUrl}`;
      this.isLoading = true;

      await $fetch(url, {
        method: "DELETE",
      }).catch((error) => {
        if (error) {
          this.error = {
            message: error.statusMessage,
            statusCode: error.statusCode,
          } as DeleteDialogState["error"];
          this.isLoading = false;
          throw error;
        }
      });

      const toastStore = useToast();
      toastStore.show({
        message: "Record deleted successfully",
        type: "success",
        dismissible: true,
        autoClose: true,
      });

      this.error = null;
      this.isOpen = false;
      this.isLoading = false;
      return true;
    },
  },
});

export {
  useTokenSet,
  useAbpConfiguration,
  useDeleteDialog,
  useTenants,
  useFeatures,
  useProfile,
  useToast,
};
