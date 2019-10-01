module.exports = {
  // Airbnb says yes but react team says no...I choose to defer to react team
  // in this scenario.
  // @see https://github.com/airbnb/javascript/pull/985#issuecomment-239145468
  'react/jsx-filename-extension': 'off',

  // airbnb breaking change in v18. Turning this off because I think this is a powerful
  // pattern used a lot on projects I work on. It's more of a nuisance than a help.
  // @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/CHANGELOG.md#1800--2019-08-10
  'react/jsx-props-no-spreading': 'off',
};
