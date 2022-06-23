# Stand with Ukraine - Frontend

This is a monorepo for the Stand with Ukraine BigCommerce app. There are two main frontend applications:

1. Application Dashboard - `/apps/dashboard`
2. Storefront Widget - `/apps/widget`

There is a mock api server `/apps/mocks` that uses local file system to store state for easy development.
It will need to be kept up-to date with the backend project as changes are made there.

The shared packages are stored in the `/packages` folder.

## Start Local Development

1. Install NodeJS & Yarn - Recommended version NodeJS ~v16 & Yarn ~v1
2. Install Dependencies `yarn install`
3. Start local servers `yarn dev`
   - dashboard available at `http://localhost:3001/dashboard/`
   - widget available at `http://localhost:3002/widget/`
   - api requests are routed automatically from `/api` routes on widget and dashboard servers to mock api server running at port `9000`

## Helpful Commands:

1. `yarn build` builds all the projects
2. `yarn lint` checks all the projects using tslint
3. `yarn format` auto formats all the project files
4. `yarn clean` clears local dependencies and cache files
