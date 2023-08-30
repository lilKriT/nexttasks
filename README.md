# Next Tasks

This is my first attempt at a real Next 13 project. It will be a simple Task list.

## Goals

- [] Create a working page
- [] Create backend with CRUD for tasks
- [] Add a Front End for the tasks
- [] Deploy
- [] Make unique description and title per page

## Optional Goals

- [] Create model and CRUD for users.

Created by lilKriT.

# What I learned so far

- routes are document based: To make about page, create `about/page.tsx` file.
- I can create custom layouts for each page.
- I can use next/link to link to other pages. No `<a>` required!
- I can put metadata in layout, or in the page itself.
- I can import google fonts.
- I can put components anywhere in the app folder. (but it's good to organize them)
- [Server components vs Client components](#server-components-vs-client-components)
- Fetching data from server component - no useEffect! You can still use fetch / await.
- Loading page / component - create loading.tsx
- Dynamic routes - make a folder with `[name]` and page.tsx inside
- To get page props: `const Page = ({params}) -> ...` or destructure it even more: `{params: { name, id }}`
- Suspense Boundaries - `import Suspense`, wrap async components in `<Suspense>`, add a fallback
- [Caching and invalidating](#caching-and-invalidating) - fetch caches **indefinitely** by default
- [API route handlers](#api) (no need for express / fastify) - make folder structure, and `route.js` file
- Fetch data from API - same as from external API, just use proper URL.
- [Search Params](#search-params)
- Body arguments - `await request.json()`
- [Refactoring server to client component](#refactoring-server-to-client-component)

## Server Components vs Client Components

Pros:

- Load faster, no JS
- Smaller bundle size
- SEO Friendly
- Access to server resources
- Hide sensitive data from client
- More secure against XSS
- Improved DX

Cons:

- Less interactive
- No component state (no useState!)
- No lifecycle (no useEffect!)

## Caching and invalidating

There used to be two methods, `getStaticProps` (for static data) and `getServerSideProps` (for changing data). Not anymore, now you always use `fetch`. But you can use `revalidate`, aka how often to check for data.

```js
await fetch(`url`, {
  next: {
    revalidate: 60, // number of seconds to wait
  },
});
```

It's up to you to choose how often to revalidate.

## API

Typical API function is placed in `/api/path/route.js`

```js
import { NextResponse } from "next/server";
export async function GET(request) {
  return NextResponse("Hi");
}
```

To return JSON: ` NextResponse.json(file)`
You can also just use `Response`.

## Search params

```js
const { searchParams } = new URL(request.url);
console.log(request.url); // whole URL
console.log(searchParams); // all the params
console.log(searchParams.get("query")); // specific param
```

## Refactoring server to client component

Required when you need dynamic data. Add `useClient` on top of the file. Inside a client component, you can't use a server component. Instead of fetch, you need to use `useEffect` / `useState` etc. `loading` will work, but you must use it manually. For example:

```js
if(loading) {
    return <Loading>
}
```
