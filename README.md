## Setup

Create a .env file with the following contents:
```bash
SANITY_PROJECT_ID="your_sanity_project_id"
SANITY_DATASET="your_sanity_dataset"
```

Make sure to install dependencies:

```bash
# npm
npm install
npm install dotenv
npm install aos --save
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
