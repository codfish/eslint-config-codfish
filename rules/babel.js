const style = require('eslint-config-airbnb-base/rules/style').rules;
const bestPractices = require('eslint-config-airbnb-base/rules/best-practices').rules;

// docs: https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin

module.exports = {
  // turn off original rules
  'new-cap': 'off',
  'no-invalid-this': 'off',
  'object-curly-spacing': 'off',
  semi: 'off',
  'no-unused-expressions': 'off',

  // set rules
  '@babel/new-cap': style['new-cap'],
  '@babel/no-invalid-this': bestPractices['no-invalid-this'],
  '@babel/no-unused-expressions': bestPractices['no-unused-expressions'],
  '@babel/object-curly-spacing': style['object-curly-spacing'],
  '@babel/semi': style.semi,
};
