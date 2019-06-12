const ESLINT_RULES = {
  'comma-dangle': ['error', 'always-multiline'],
  'key-spacing': 'off',
  'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
  'no-multi-spaces': 'off',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'error',
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': 'off',
  'no-dupe-class-members': 'off',
  'operator-linebreak': ['error', 'before'],
  'padded-blocks': ['error', { 'classes': 'always' }],

}

module.exports = {
  ESLINT_RULES,
}
