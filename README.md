# eslint-config-codfish

> Opinionated ESLint configuration that extends airbnb to not conflict with prettier.

[![version](https://img.shields.io/npm/v/eslint-config-codfish.svg)](http://npm.im/eslint-config-codfish)
[![downloads](https://img.shields.io/npm/dm/eslint-config-codfish.svg)](http://npm-stat.com/charts.html?package=eslint-config-codfish&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/eslint-config-codfish.svg)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Features

- Uses [Airbnb's config](https://github.com/airbnb/javascript/tree/master/packages) as the
  foundation.
- Leverages [prettier's eslint plugin](https://github.com/prettier/eslint-plugin-prettier), which
  run's prettier within ESLint, and overrides ESLint/Airbnb rules that may conflict with Prettier.
- Supports both React & non-React applications dynamically based on your project's dependencies.
- Extends
  [Kent C Dodd's Jest config](https://github.com/kentcdodds/eslint-config-kentcdodds/blob/master/jest.js)
  dynamically based on your project's dependencies.
- Enforces js instead of jsx files.
- Turns off `import/no-unresolved` errors for node modules in projects using Docker, to avoid false
  positives.
- Helpful opt-in config for dApp's.

## Usage

Install by running:

```sh
npm install --save-dev prettier eslint eslint-config-kentcdodds
```

[My recommended setup](https://gist.github.com/codfish/91ef26f3a56a5c5ca0912aa8c0c5c020) includes
tools like husky, lint-staged & commitlint in addition to prettier & eslint. However that's
optional.

Then add the extends to your .eslintrc:

```js
module.exports = {
  extends: ['codfish'],
  rules: {
    // your overrides here
  },
};
```

Optionally add a .prettierrc.js configuration file:

```js
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  proseWrap: 'always',
};
```

### With dApps

Similar to the issues with docker, there may be rules you want to adjust for dApp's. This config
will set some globals as well as ignore missing build artifact imports. While you obviously need
those to run your app, sometimes you might want to run the linter in a ci/cd environment and build
artifacts might not be present.

**Note**: The dApp config also includes the `import/no-unresolved` rule found in the docker config.

```js
module.exports = {
  extends: ['codfish', 'codfish/dapp'],
  rules: {
    // your overrides here
  },
};
```
