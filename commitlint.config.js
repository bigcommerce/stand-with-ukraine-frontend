module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['all', 'ci', 'widget', 'dashboard', 'landing', 'configs', 'deps', 'release', 'mocks'],
    ],
  },
};
