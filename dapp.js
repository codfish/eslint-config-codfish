module.exports = {
  rules: {
    'import/no-unresolved': ['error', { ignore: ['^[^.]+', '/contracts/'] }],
  },
  overrides: [
    {
      files: ['(contracts|truffle|migrations)/**/*.js'],
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
