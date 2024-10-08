module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['INFRA-']
    }
  },
  'references-empty': [2, 'never']
};
