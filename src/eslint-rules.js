const ESLINT_RULES = {
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/no-useless-constructor': 'off',
  'comma-dangle': ['error', 'always-multiline'],
  'key-spacing': 'off',
  'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
  'no-dupe-class-members': 'off',
  'no-multi-spaces': 'off',
  'no-unused-vars': 'off',
  'no-useless-constructor': 'off',
  'operator-linebreak': ['error', 'before'],
  'padded-blocks': ['error', { 'classes': 'always' }],
  'require-await': 'error',
}

module.exports = {
  ESLINT_RULES,
}
