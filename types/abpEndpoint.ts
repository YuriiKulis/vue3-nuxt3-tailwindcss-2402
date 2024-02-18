export type AbpEndpoint =
  | "/abp/application-configuration"
  | "/multi-tenancy/tenants"
  | "/account/my-profile"
  | "/account/my-profile/change-password"
  | "/feature-management/features"
  | "/identity/roles/all"
  | "/identity/roles"
  | "/setting-management/timezone"
  | "/setting-management/timezone/timezones"
  | "/setting-management/emailing"
  | "/setting-management/emailing/send-test-email"
  | "/identity/users"
  | "/identity/users/assignable-roles"
  | "/identity/users/by-username"
  | "/identity/users/by-email"
  | "/permission-management/permissions"
  | "/abp/application-localization"
  | "/abp/api-definition";
