const style = require('eslint-config-airbnb-base/rules/style').rules;
const bestPractices = require('eslint-config-airbnb-base/rules/best-practices').rules;
const errors = require('eslint-config-airbnb-base/rules/errors').rules;

module.exports = {
  // turn off original rules
  'new-cap': 'off',
  camelcase: 'off',
  'no-invalid-this': 'off',
  'object-curly-spacing': 'off',
  semi: 'off',
  'no-unused-expressions': 'off',
  'valid-typeof': 'off',
  'generator-star-spacing': 'off',
  'object-shorthand': 'off',
  'arrow-parens': 'off',
  'func-params-comma-dangle': 'off',
  'array-bracket-spacing': 'off',
  'flow-object-type': 'off',
  'no-await-in-loop': 'off',

  // set rules
  'babel/new-cap': style['new-cap'],
  'babel/camelcase': style.camelcase,
  'babel/no-invalid-this': bestPractices['no-invalid-this'],
  'babel/object-curly-spacing': style['object-curly-spacing'],
  'babel/semi': style.semi,
  'babel/no-unused-expressions': bestPractices['no-unused-expressions'],
  'babel/valid-typeof': errors['valid-typeof'],

  // deprecated or soon to be
  'babel/quotes': 'off',
  'babel/generator-star-spacing': 'off',
  'babel/object-shorthand': 'off',
  'babel/arrow-parens': 'off',
  'babel/func-params-comma-dangle': 'off',
  'babel/array-bracket-spacing': 'off',
  'babel/flow-object-type': 'off',
  'babel/no-await-in-loop': 'off',
};
