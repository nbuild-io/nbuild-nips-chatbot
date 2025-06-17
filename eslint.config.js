const { defineConfig } = require("eslint/config")
const expoConfig = require("eslint-config-expo/flat")
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended")

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    rules: {
      semi: ["error", "never"],
      quotes: ["error", "double"],
      "prefer-const": "error",
      indent: ["error", 2],
      "max-len": [
        "error",
        {
          code: 80,
          ignoreUrls: true,
          tabWidth: 2,
        },
      ],
      "no-extra-parens": [
        "error",
        "all",
        {
          conditionalAssign: false,
          returnAssign: false,
          ignoreJSX: "all",
        },
      ],
      "react/no-unknown-property": [
        2,
        {
          ignore: ["jsx"],
        },
      ],
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          semi: false,
        },
      ],
    },
    ignores: ["dist/*", "node_modules", ".expo"],
  },
])
