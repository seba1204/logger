module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-use-before-define': 'off', // for styles in reactNative
    'comma-dangle': 'off', // can omit the last comma on objects
    semi: [2, 'never'], // no use of semi-colon
  },
};
