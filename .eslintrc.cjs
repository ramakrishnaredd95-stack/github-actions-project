module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,              // allow describe/it/expect
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',   // modern React doesn't need React import
    'no-undef': 'off'                    // avoids describe/it errors in tests
  },
};
