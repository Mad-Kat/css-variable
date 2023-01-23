module.exports = {
  rootDir: __dirname,
  moduleNameMapper: {
    "css-variable$": "../../dist",
  },
  transform: {
    "^.+\\.js$": "<rootDir>/test/babel/transformer.js",
  },
};
