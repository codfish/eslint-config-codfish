const fs = require('fs');
const path = require('path');
const { ifAnyDep } = require('./utils');
const reactRules = require('./rules/react');
const babelRules = require('./rules/babel');
const dockerRules = require('./rules/docker');
const typescriptRules = require('./rules/typescript');

// eslint-disable-next-line no-nested-ternary
const tsConfig = fs.existsSync('tsconfig.json')
  ? path.resolve('tsconfig.json')
  : fs.existsSync('types/tsconfig.json')
  ? path.resolve('types/tsconfig.json')
  : undefined;

module.exports = {
  extends: [
    // Airbnb config as the foundation
    ifAnyDep('react', 'airbnb', 'airbnb-base'),

    // Kent C. Dodds' Jest config
    ifAnyDep('jest', 'kentcdodds/jest'),

    // Prettier plugin includes config, plugin & rules declaration
    'plugin:prettier/recommended',
  ].filter(Boolean),

  parser: '@babel/eslint-parser',

  parserOptions: {
    requireConfigFile: false,
    allowImportExportEverywhere: true,
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['@babel'],

  rules: {
    ...reactRules,
    ...babelRules,
    ...dockerRules,
  },

  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },

  overrides: [
    // overrides for TypeScript files
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        ifAnyDep('react', 'airbnb-typescript', 'airbnb-typescript/base'),
        'plugin:prettier/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: tsConfig,
      },
      plugins: ['@typescript-eslint'],
      rules: {
        ...typescriptRules,
        // redeclaring rules overrides cause `airbnb-typescript` re-extends from
        // `airbnb`'s config, effectively overriding the overrides
        ...reactRules,
        ...dockerRules,
      },
    },

    // sane overrides for test files
    {
      files: [
        '**/__mocks__/**/*.js',
        '**/__tests__/**/*.js',
        '**/__fixtures__/**/*.js',
        '**/test/**/*.js',
        '*.test.js',
        '*.spec.js',
        'jest.setup.js',
        'jest.config.js',
        'setupTests.js',
        'testUtils.js',
      ],
      env: {
        mocha: true,
        jest: true,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-expressions': 'off',
      },
    },

    // sane overrides for dot files
    {
      files: [
        '.eslintrc.js',
        'eslint.config.js',
        '.prettierrc.js',
        'prettier.config.js',
        '.commitlintrc.js',
        'commitlint.config.js',
        '.huskyrc.js',
        '.lintstagedrc.js',
        'lint-staged.config.js',
      ],
      rules: {
        // linting only runs in non-prod environments so we should be able to
        // import dev dependencies
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
