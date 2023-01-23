module.exports = {
  presets: ["@babel/preset-typescript"],
  plugins: [],
  env: {
    test: {
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