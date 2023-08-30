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
- Router used `/pages` before. Now it's `/app`
- `()` will ignore the directory in url path. `/app/(admin)/dashboard` will be accessed by `/app/dashboard`
- Adding `--turbo` to dev script will use turbopack. **(only works with dev so far!)**
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
- [Exporting variables](#exporting-page-variables)
- Refreshing - `import {useRouter} from "next/navigation"`, `const router = useRouter()`,` router.refresh()`
- [Server Actions](#server-actions)

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

Alternatively, you can use

```js
{
  cache: "no-store";
}
```

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

## Exporting page variables

Some examples:

```js
export const dynamic = "auto",
  dynamicParams = true,
  revalidate = true,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";
```

## Server Actions

While still on a **server side component** (aka no `use client`), connect to a DB and fetch your data.
You can use that data as form default data.
Instead of `onSubmit`, add an **action**

```js
<form action="update">
    <input name="title" type="text" defaultValue={example.title}>
    <button type="submit">Save</button>
</form>
```

Then define the function:

```js
async function update(formData: FormData) {
  `useServer`; // This will turn function into a server function!

  //   Updating data
  await db.update(id, {
    title: formData.get("title"),
  });

  //   So far this works, but won't update the front-end data.
  // We can fix this with:
  revalidatePath(`/examples/${params.id}/edit`);
}
```

Because it's a server action, it can access things like headers and cookies.

You can add a loading style, for example a skeleton by created a `loading.tsx` file.

You can also add multiple actions:

```js
<button formAction={saveAndQuit}>Save and Quit</button>
```

The `saveAndQuit` method would look just like `update`, except:

```js
redirect(`/examples/${params.id}`);
```

You can extract the functions in a different file.

Client actions:
actions only work **inside a form**!

`useTransition`
It allows a non blocking state update

```js
`use client`;
import { useTransition } from "react";

export default function Likes({ id }: any) {
  let [isPending, startTransition] = useTransition();

  return (
    <div>
      <button onClick={() => startTransition(() => like(id))}>Like</button>
    </div>
  );
}
```

Optimistic updates is experimental, it can be used instead of `useTransition`

```js
`use client`

import {experimental_useOptimistic as useOptimistic} from "react"

export default function Likes({likeCount, id} : {any}){
    const [optimisticLikes, addOptimisticLike] = useOptimistic(
        {likeCount, sending: false},
        (state, newLikeCount) => ({
            ...state,
            likeCount: newLikeCount,
            sending: true
        })
    );

    return (
        <div>
            Optimistic Likes: {optimisticLikes.likeCount}
            {optimisticLikes.sending ? "Sending... " : ""}
            <button onClick={async () => {
                addOptimisticLikes(optimisticLikes.likeCount + 1)
                await like(id)
            }}>Like</button>
        </div>
    )
}
```
