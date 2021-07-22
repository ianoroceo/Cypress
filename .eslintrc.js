module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    mocha: true,
    "cypress/globals": true,
  },
  extends: ["eslint:recommended", "plugin:cypress/recommended"],
  globals: {
    $: true,
    $$: true,
    browser: true,
    expect: true,
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  "plugins": [
    "cypress"
  ],
  rules: {
    "arrow-parents": [0, "as-needed"],
    "require-jsdoc": "off",
    "brace-style": [0, "allman", { allowSingleLine: true }],
    "max-len": ["error", { code: 300 }],
    "object-curly-spacing": ["error", "always"],
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "cypress/no-async-tests": "error"
  },
};
