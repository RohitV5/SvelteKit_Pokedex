# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

Source Reference : https://www.youtube.com/watch?v=UU7MgYIbtAk
SvelteKit Docs - https://kit.svelte.dev/docs
Vite (SvelteKit Build Tool) - https://github.com/vitejs/vite
PokeAPI - https://pokeapi.co/
Tailwind Setup - way1- https://codechips.me/tailwindcss-sveltekit-the-easy-way/
                 way2- https://jsco.dev/blog/how-to-set-up-tailwindcss-with-svelte-kit

Vite is a build tool used by Svelte


Create new svelte app
npm init svelte@next

========================|
One Component has       |
<style>                 |
//scoped to component   |
</style>                |
                        |
<div>                   |
                        |
</div>                  |
                        |
<script>                |
</script>               |
========================|


Tailwind Setup
npm add -D tailwindcss autoprefixer postcss-load-config

.cjs -> common js
