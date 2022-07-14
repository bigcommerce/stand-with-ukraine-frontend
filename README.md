# Stand with Ukraine - Frontend

This is a monorepo for the Stand with Ukraine BigCommerce app.

## Project Structure

1. Application Dashboard - `apps/dashboard`
   This is the configuration dashboard served to the merchant when they open the app from within the BigCommerce store apps.
   It is responsible for allowing the merchant to install/update/remove the widget from the store.

2. Storefront Widget - `apps/widget`
   The widget that is injected on the storefront. For local development the configuration is fetched from the mock api and stored in `window.SWU_CONFIG`. In production the storefront script will have `SWU_CONFIG` defined directly.

3. Mock Server - `apps/mocks`
   It uses local file system to store state for easy development without needing to run the backend project and database

The shared packages are stored in the `packages` folder.

## Start Local Development

1. Install NodeJS & Yarn - Recommended version NodeJS ~v16 & Yarn ~v1
2. Install Dependencies `yarn install`
3. Start local servers `yarn dev`
   - dashboard available at `http://localhost:3001/dashboard/`
   - widget available at `http://localhost:3002/widget/`
   - api requests are proxied from `/api` routes on widget and dashboard servers to mock api server running at port `9000`

## Helpful Commands:

1. `yarn build` builds all the projects
2. `yarn lint` checks all the projects using tslint
3. `yarn format` auto formats all the project files
4. `yarn clean` clears local dependencies and cache files
