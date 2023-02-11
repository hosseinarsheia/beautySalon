module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1, ignoredNodes: ['ConditionalExpression'] }],

    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',

    '@typescript-eslint/no-shadow': ['error'],
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'no-return-await': 'error',
    'no-throw-literal': 'error',
    'no-await-in-loop': 'error',
    'react/no-deprecated': 'error',
    'max-depth': ['error', 4],
    'id-length': ['error', { min: 2, properties: 'never', exceptions: ['R', 't'] }],
    eqeqeq: ['error', 'smart'],
    'no-duplicate-imports': 'error',
    'no-console': 'error',
    curly: 'off',

    // must be last one
    'prettier/prettier': 'error',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
