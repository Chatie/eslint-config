module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: [
    'standard',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    }
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    'no-multi-spaces': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': ['error', { allow: ['info'] }],
  },
}
