const { ifAnyDep, ifFile } = require('./utils');

let rules = {};

const usesDocker = ifFile('Dockerfile', true, false) || ifFile('docker-compose.yml', true, false);
if (usesDocker) {
  // should use this rule when using docker. node_modules should be installed
  // and present in your containers, but not needed/mounted on the host
  // machine. eslint will complain that it can't find node_modules imports.
  // this will ignore the rule for imports that don't start with a period.
  // Pros (remove annoying false positives) outweigh cons IMO.
  rules = { ...rules, 'import/no-unresolved': ['error', { ignore: ['^[^.]+'] }] };
}

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
    // Airbnb says yes but react team says no...I choose to defer to react team
    // in this scenario.
    // @see https://github.com/airbnb/javascript/pull/985#issuecomment-239145468
    'react/jsx-filename-extension': 'off',

    // airbnb breaking change in v18. Turning this off because I think this is a powerful
    // pattern used a lot on projects I work on. It's more of a nuisance than a help.
    // @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/CHANGELOG.md#1800--2019-08-10
    'react/jsx-props-no-spreading': 'off',

    ...rules,
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
