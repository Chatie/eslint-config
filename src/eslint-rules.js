const ESLINT_RULES = {
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/no-useless-constructor': 'off',
  'comma-dangle': ['error', 'always-multiline'],
  'key-spacing': 'off',
  'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
  'no-dupe-class-members': 'off',
  'no-multi-spaces': 'off',
  'no-unused-vars': 'off',
  'no-useless-constructor': 'off',
  'no-void': ['error', { allowAsStatement: true }],
  'operator-linebreak': ['error', 'before'],
  'padded-blocks': ['error', { classes: 'always' }],
  'sort-keys': 'error',
}

module.exports = {
  ESLINT_RULES,
}
