const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = app => {
  app.use("/api_crud", createProxyMiddleware({ target: "http://lms.softhealth.com.mx", changeOrigin: true }));
};
