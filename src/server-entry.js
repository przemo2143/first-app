// entry-server.js
import createApp from "./server-app";
export default context => {
  // since there could potentially be asynchronous route hooks or components,
  // we will be returning a Promise so that the server can wait until
  // everything is ready before rendering.
  return new Promise((resolve, reject) => {
    // Create new app instance for every request
    const { app, router } = createApp();

    // log the path
    console.log(context.url);

    // set server-side router's location
    router.push(context.url);

    // wait until router has resolved possible async components and hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      // no matched routes, reject with 404
      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }

      // the Promise should resolve to the app instance so it can be rendered
      resolve(app);
    }, reject);
  });
};
