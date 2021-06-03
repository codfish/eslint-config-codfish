module.exports = {
  // turn off babel rules to let typescript handle things
  '@babel/no-unused-expressions': 'off',
  '@babel/no-invalid-this': 'off',

  // Explicitly require 'tsx' to existing react rule (see ./react.js for more info)
  'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
  '@typescript-eslint/explicit-module-boundary-types': 'off',
};
