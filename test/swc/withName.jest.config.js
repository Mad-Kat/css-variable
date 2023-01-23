const path = require("path");
module.exports = {
  rootDir: __dirname,
  moduleNameMapper: {
    "css-variable$": "../../dist",
  },
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          experimental: {
            plugins: [
              [
                require.resolve(
                  "../../swc/target/wasm32-wasi/debug/swc_plugin_css_variable.wasm"
                ),
                {
                  basePath: path.join(__dirname,"../../src/"),
                  displayName: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
