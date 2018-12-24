module.exports = {
  rules: {
    // should use this if you're using docker. node_modules should be installed
    // and present in your containers, but not needed/mounted on the host
    // machine. eslint will complain that it can't find node_modules imports.
    // this will ignore the rule for imports that don't start with a period.
    'import/no-unresolved': ['error', { ignore: ['^[^.]+'] }],
  },
};
