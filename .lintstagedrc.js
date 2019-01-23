module.exports = {
  '*.{json,css,scss,md}': ['prettier --write', 'git add'],
  '*.js': ['eslint --fix', 'git add'],
};
