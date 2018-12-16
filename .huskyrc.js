module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'commit-msg': 'commitlint --env HUSKY_GIT_PARAMS',
  },
};
