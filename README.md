# Ant design + Redux + Next.js + Web3

Install it and run:

```bash
yarn
yarn dev
```



In the first example the page displays a digital clock that updates every second. The first render is happening in the server and then the browser will take over. To illustrate this, the server rendered clock will have a different background color (black) than the client one (grey).

The Redux `Provider` is implemented in `pages/_app.js`. Since the `MyApp` component is wrapped in `withReduxStore` the redux store will be automatically initialized and provided to `MyApp`, which in turn passes it off to `react-redux`'s `Provider` component.

All pages have access to the redux store using `connect` from `react-redux`.

On the server side every request initializes a new store, because otherwise different user data can be mixed up. On the client side the same store is used, even between page changes.

The example under `components/counter.js`, shows a simple incremental counter implementing a common Redux pattern of mapping state to props. Again, the first render is happening in the server and instead of starting the count at 0, it will dispatch an action in redux that starts the count at 1. This continues to highlight how each navigation triggers a server render first and then a client render when switching pages on the client side

For simplicity and readability, Reducers, Actions, and Store creators are all in the same file: `store.js`
