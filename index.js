const { ifAnyDep, ifFile } = require('./utils');
const reactRules = require('./rules/react');
const babelRules = require('./rules/babel');

const usesDocker = ifFile('Dockerfile', true, false) || ifFile('docker-compose.yml', true, false);

module.exports = {
  extends: [
    // Airbnb config as the foundation
    ifAnyDep('react', 'airbnb', 'airbnb-base'),

    // Kent C. Dodds' Jest config
    ifAnyDep('jest', 'kentcdodds/jest'),

    // Prettier plugin includes config, plugin & rules declaration
    'plugin:prettier/recommended',

    // Prettier react rules
    ifAnyDep('react', 'prettier/react'),
  ].filter(Boolean),

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['babel'],

  rules: {
    ...reactRules,
    ...babelRules,
    ...(usesDocker && { 'import/no-unresolved': ['error', { ignore: ['^[^.]+'] }] }),
  },

  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },

  overrides: [
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
    // sane overrides for lint files
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
