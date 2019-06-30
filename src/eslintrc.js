const { ESLINT_RULES }  = require('./eslint-rules')
const { TSLINT_CONFIG } = require('./tslint-config')

const rules = {
  ...ESLINT_RULES,
  '@typescript-eslint/tslint/config': ['error', TSLINT_CONFIG],
}

const ESLINT_RC =  {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:promise/recommended',
    'standard',
  ],
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  parserOptions: {
    ecmaFeatures: {
      modules: true,
    },
    ecmaVersion: 6,
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/tslint',
    'promise',
  ],
  rules,
}

module.exports = ESLINT_RC
