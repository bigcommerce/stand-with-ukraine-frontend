module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['all', 'ci', 'widget', 'dashboard', 'configs', 'deps', 'release', 'mocks'],
    ],
  },
};
