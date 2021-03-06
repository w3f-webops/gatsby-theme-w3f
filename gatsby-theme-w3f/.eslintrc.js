module.exports = {
  /* parser: '@typescript-eslint/parser', */
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
    // Those are some additional security-related lints.
    // There's a chance those will introduce some false positives to our CI,
    // but the stakes are rather high here, so better safe than sorry
    'plugin:security/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['react', 'prettier', 'simple-import-sort'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'simple-import-sort/imports': 'off',
    // Disable prop-types
    'react/prop-types': 'off',
    // Enable prettier rules
    'prettier/prettier': 'off',
  },
};
