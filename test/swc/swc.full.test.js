const transformFileSync = require("@swc/core").transformFileSync;
const path = require("path");
// const plugin = require("../../swc");

describe("production transform", () => {
    it("CSSVariable", () => {
      const { code } = transformFileSync(
        path.join(__dirname, "../fixtures/CSSVariable.js"),
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
                    displayName: false,
                  },
                ],
              ],
            },
          },
        }
      );
      expect(code).toMatchSnapshot();
    });
    it("createVar", () => {
      const { code } = transformFileSync(
        path.join(__dirname, "../fixtures/createVar.js"),
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
                    displayName: false,
                  },
                ],
              ],
            },
          },
        }
      );
      expect(code).toMatchSnapshot();
    });
    it("renamed", () => {
      const { code } = transformFileSync(
        path.join(__dirname, "../fixtures/renamed.js"),
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
                    displayName: false,
                  },
                ],
              ],
            },
          },
        }
      );
      expect(code).toMatchSnapshot();
    });
  });

  describe("development transform", () => {
    it("CSSVariable", () => {
      const { code } = transformFileSync(
        path.join(__dirname, "../fixtures/CSSVariable.js"),
        {
          envName: "development",
          jsc: {
            experimental: {
              plugins: [
                [
                  require.resolve(
                    "../../swc/target/wasm32-wasi/debug/swc_plugin_css_variable.wasm"
                  ),
                  {
                    basePath: path.join(__dirname,"../../src/"),
                    displayName: false,
                  },
                ],
              ],
            },
          },
        }
      );
      expect(code).toMatchSnapshot();
    });
    it("createVar", () => {
      const { code } = transformFileSync(
        path.join(__dirname, "../fixtures/createVar.js"),
        {
          envName: "development",
          jsc: {
            experimental: {
              plugins: [
                [
                  require.resolve(
                    "../../swc/target/wasm32-wasi/debug/swc_plugin_css_variable.wasm"
                  ),
                  {
                    basePath: path.join(__dirname,"../../src/"),
                    displayName: false,
                  },
                ],
              ],
            },
          },
        }
      );
      expect(code).toMatchSnapshot();
    });
    it("renamed", () => {
      const { code } = transformFileSync(
        path.join(__dirname, "../fixtures/renamed.js"),
        {
          envName: "development",
          jsc: {
            experimental: {
              plugins: [
                [
                  require.resolve(
                    "../../swc/target/wasm32-wasi/debug/swc_plugin_css_variable.wasm"
                  ),
                  {
                    basePath: path.join(__dirname,"../../src/"),
                    displayName: false,
                  },
                ],
              ],
            },
          },
        }
      );
      expect(code).toMatchSnapshot();
    });
  });

  describe("production transform with displayName", () => {
    it("CSSVariable", () => {
      const { code } = transformFileSync(
        path.join(__dirname, "../fixtures/CSSVariable.js"),
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
        }
      );
      expect(code).toMatchSnapshot();
    });
    it("createVar", () => {
      const { code } = transformFileSync(
        path.join(__dirname, "../fixtures/createVar.js"),
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
        }
      );
      expect(code).toMatchSnapshot();
    });
    it("renamed", () => {
      const { code } = transformFileSync(
        path.join(__dirname, "../fixtures/renamed.js"),
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
        }
      );
      expect(code).toMatchSnapshot();
    });
  });