This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Demo page: https://sessions-program-app.vercel.app

## Getting Started

First, run the development server:

```bash
# first
yarn
# then
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design choices / trade-offs
- Vercel supports bulding an API endpoint inside a Next.js app and deploy it to Vercel serverless function so we have to go with Vervel, otherwise it would be tricky to deploy api to other platforms.
- Improve fetching data performance from api by caching session data in memory of a serverless function after retrieving session data from external api. Fetching may be slow upon init load, but it will be much faster after that.
- Improve loading time by doing server side rendering.
- Store filters `status` and `short_title` in url query so that we don't need to use React local state to manage the state of these filters. Whenever route query changes, Nextjs automatically call `getServerSideProps` to fetch new data without calling api manually.
