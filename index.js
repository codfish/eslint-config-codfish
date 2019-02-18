const { ifAnyDep } = require('./utils');

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

  rules: {
    // One opinionated rule override...
    // Airbnb says yes but react team says no...I choose to defer to react team
    // in this scenario.
    // @see https://github.com/airbnb/javascript/pull/985#issuecomment-239145468
    'react/jsx-filename-extension': 'off',
  },

  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },

  // sane overrides for test files
  overrides: [
    {
      files: ['**/__tests__/**/*.js', '**/test/**/*.js', '*.test.js', '*.spec.js', 'setupTests.js'],
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
  ],
};
