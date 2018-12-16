const { ifAnyDep } = require('./utils');

module.exports = {
  extends: [ifAnyDep('react', 'airbnb', 'airbnb-base'), './jest.js'],

  rules: {
    // rules which airbnb & prettier will conflict to the point which prevents
    // linting from passing. They're avoidable but it can be quite annoying.
    'function-paren-newline': ['error', 'consistent'],
    // prettier wants to break up long lines and won't wrap in parens, airbnb's
    // eslint rules enforce location of function bodies.
    'implicit-arrow-linebreak': 'off',

    // the one opinionated rule override...
    // https://github.com/airbnb/javascript/pull/985#issuecomment-239145468
    // airbnb says yes but react team says no...I choose to defer to react team
    // in this scenario.
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
      files: ['**/__tests__/**/*.js', '**/test/**/*.js', '*test.js', '*.spec.js'],
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
