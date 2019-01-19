module.exports = {
  rules: {
    'import/no-unresolved': ['error', { ignore: ['^[^.]+', '/contracts/'] }],
  },
  overrides: [
    {
      files: ['**/contracts/**/*.js', '**/migrations/**/*.js', '**/truffle/**/*.js'],
      globals: {
        artifacts: true,
        assert: true,
        contract: true,
        deployer: true,
        web3: true,
      },
    },
  ],
};
