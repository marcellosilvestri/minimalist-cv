# Marcello’s Minimalist CV Website

This is a minimalist CV website made with **Next.js/TailwindCSS.** You are welcome to clone this repository. If you do so, a star or a shoutout on [X/Twitter](https://x.com/shirubusutori) would be greatly appreciated!

It uses [framer-motion](https://www.framer.com/motion/) for simple page transitions, [next-sitemap](https://www.npmjs.com/package/next-sitemap) for dynamic sitemaps generation, [shadcn/ui](https://ui.shadcn.com/) for certain components (such as the light/dark theme toggle) and [PostHog](https://posthog.com/) for web analytics.

It is deployed on [Vercel.](https://vercel.com/silvestri)

## Demo website

This code is currently being used at https://silvestri.bio.

## Getting started

Clone the repository:

```bash
git clone https://github.com/marcellosilvestri/minimalist-cv.git .
```

Install the dependencies:

```bash
npm install
```

Start the server:

```bash
npm run dev
```

## Setting up the environment variables

### PostHog

In your `.env` file, don’t forget to add the following two environment variables:

```bash
NEXT_PUBLIC_POSTHOG_HOST=YOUR_POSTHOG_HOST
NEXT_PUBLIC_POSTHOG_KEY=YOUR_POSTHOG_KEY
```

For more information, visit PostHog’s [NextJS docs.](https://posthog.com/docs/libraries/next-js)

### next-sitemap

Make sure to add your `SITE_URL` to your `.env` file to ensure the URL passed to `next-sitemap.config.js` is the correct one.

```bash
SITE_URL=https://yoursite.com
```
