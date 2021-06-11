## Getting Started

First, Install the client and server dependencies:

client:

```bash
cd client && npm i
# or
cd client && yarn
```

server:

```bash
cd server && npm i
# or
cd server && yarn
```

## Setup the server

inside server folder:

```bash
cp .env.example .env
```

Then fill environment variables:

You can simply get them by [creating a github oauth app](https://github.com/settings/applications/new), You can follow [github docs](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) if you don't know how.

```bash
GITHUB_ID=YOUR_GITHUB_CLIENT_ID
GITHUB_SECRET=YOUR_GITHUB_CLIENT_SECRET
```

Finally, run the development server:

inside server folder:

```bash
npm run start
# or
yarn start
```

Then inside client folder:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
