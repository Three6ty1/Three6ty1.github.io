/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route("/", "routes/index.tsx", {index: true});
      route("/arknights-wordle", "routes/arknights-wordle.tsx");
    })
  }
};
