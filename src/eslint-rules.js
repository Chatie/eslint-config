const ESLINT_RULES = {
  'comma-dangle': ['error', 'always-multiline'],
  'key-spacing': 'off',
  'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
  'no-multi-spaces': 'off',
  // note you must disable the base rule as it can report incorrect errors
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'error',
  'padded-blocks': ['error', { 'classes': 'always' }],
}

module.exports = {
  ESLINT_RULES,
}
