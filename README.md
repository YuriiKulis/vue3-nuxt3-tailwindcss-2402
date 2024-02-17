# ABP Vue template

This repo is a work in progress. This project can be used as a drop-in replacement for the Angular/AbpReact/Blazor UI of the ABP Framework.
Check the status of the project: (Yet to be updated!)

## Demo

Yet to be updated!

## Getting Started

Yet to be updated!

### Documentation

Yet to be updated!

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [pnpm](https://pnpm.js.org/en/installation)
- [ABP Framework](https://abp.io/)
- [.Net 8](https://dotnet.microsoft.com/download/dotnet/8.0)

### Installing Template

Install the ABP Vue .Net Template

```bash

```

### Creating a new project

Create a new project using the template

```bash
dotnet new abp-vue -o my-project-name
```

> Note: You can use any name for the project. I used `my-project-name` for this example. keep in mind that the project name should be in kebab case (all lowercase and words separated by hyphens) because it will be used as the name of the package's org name.

### Running the project

```bash
cd my-project-name
pnpm install

// configure .env file as follows

NUXT_AUTHORITY_URL=https://localhost:44312
NUXT_CLIENT_ID=Abp_Vue

NUXT_CLIENT_SECRET=1q2w3e*
NUXT_SCOPE=openid profile email Abp

NUXT_REDIRECT_URI=api/auth/callback/openiddict
NUXT_POST_LOGOUT_REDIRECT_URI=api/auth/signout/callback
NUXT_ORIGIN=http://localhost:3000

NUXT_SESSION_SECRET=p66u6g46N/pFYYTFOTWyA3AqVvbyb0+i6LBg6bTOOMVeOP4=

NUXT_ABP_API_ENDPOINT=https://localhost:44388/api

pnpm dev
```

## What is this?

This is a Vue UI for the [ABP Framework](https://abp.io/). I am just getting started it is not ready for production, But you can fork it at your own risk. I am using these amazing tools
[Nuxt](https://nuxt.com/), [TypeScript](https://www.typescriptlang.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Why Use ABP Vue?

In the past, we have used Angular and React for the ABP Framework. We have also used Blazor. However, I thought that having a Vue-based UI template for the ABP Framework would be a nice touch. Nuxt3 is a very popular framework and it is straightforward to use. I am building this project to provide a Vue-based UI for the ABP Framework. I am  also building this project to provide a reference for anyone who wants to build it in Nuxt3.

## LightHouse Score

## Goals

The goal of this project is to provide a Vue UI for the ABP Framework.
It will be a fully functional UI that can be used as a starting point for any ABP project. It will also be a reference for anyone who wants to build a Vue-based UI for the ABP framework. I will try to implement all the non-commerical ABP Framework  application features.

## Features

- [x] Landing Page
- [x] Login, Logout, Register, Forgot Password (Without UX)
- [] Multilingual
- [] Theme Switcher
- [x] Profile
- [x] Tenant Management
- [] Role Management
- [] User Management
- [] Settings Management
- [] Feature Management
- [] Toast notification for all the interactions
- [] Configure the playwright and add tests

## Roadmap

Most of the features are implemented. We are planning to keep it similar to the ABP Framework Open Source Application. That means all the commercial features will not be implemented.

## Support

If want to build your project with ABP Vue and need support, you can contact me at [email-me](mailto:work@sajankumarv.com)

## How to run

1. Clone the repo
2. Run `pnpm install`
3. Run `pnpm dev`

## How to contribute

1. Fork the repo
2. Create a branch for your feature
3. Make your changes
4. Create a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

- [ABP Framework](https://abp.io/)
- [Nuxt](https://nuxt.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Contributors

- [Sajan](https://github.com/sajanv88)
