module.exports = {
  '*.{json,css,scss,md}': ['prettier --write', 'git add'],
  '*.js': ['prettier --write', 'eslint --fix', 'git add'],
};
