const { resolve } = require("path");
const { withUnimodules } = require("@expo/webpack-config/addons");

module.exports = ({ config }) => {
  return withUnimodules(config, {
    projectRoot: resolve(__dirname, "../"),
    babel: {
      dangerouslyAddModulePathsToTranspile: [
        // Ensure that all packages starting with @my are transpiled.
        '@my/ui',
      ],
    },
  });
};
