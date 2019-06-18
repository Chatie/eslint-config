const { ESLINT_RULES }  = require('./eslint-rules')
const { TSLINT_CONFIG } = require('./tslint-config')

const rules = {
  ...ESLINT_RULES,
  '@typescript-eslint/tslint/config': ['error', TSLINT_CONFIG],
}

const ESLINT_RC =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/tslint',
    'promise',
  ],
  extends: [
    'plugin:promise/recommended',
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
    project: 'tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
  },
  rules,
}

module.exports = ESLINT_RC
