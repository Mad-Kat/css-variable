module.exports = {
  presets: ["@babel/preset-typescript"],
  plugins: [],
  env: {
    "test-with-displayName": {
      presets: [["@babel/preset-env", { targets: { node: "current" } }]],
      include: ["test/fixtures/**"],
    plugins: [
            [
            require.resolve(
                "./babel"
            ),
            {
                basePath: __dirname,
                displayName: true,
            },
            ],
        ],
    },
    "test-without-displayName": {
      presets: [["@babel/preset-env", { targets: { node: "current" } }]],
      include: ["test/fixtures/**"],
    plugins: [
            [
            require.resolve(
                "./babel"
            ),
            {
                basePath: __dirname,
                displayName: false,
            },
            ],
        ],
    },
  },
}