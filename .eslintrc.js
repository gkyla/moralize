module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars" : 'warn',
    "no-loss-of-precision" : 'off',
    "no-nonoctal-decimal-escape" : "off",
    'no-unsafe-optional-chaining' : 'off',
    'no-useless-backreference' : 'off',
    "comma-dangle": 'never'
  }
};
