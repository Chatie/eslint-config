const path = require('path')

module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: [
    'standard',
  ],
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/tslint',
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
  rules: {
    '@typescript-eslint/tslint/config': ['error', {
      rules: {
        // tslint rules (will be used if `lintFile` is not specified)
        'interface-name': [true, 'never-prefix'],
        'trailing-comma': true,
        'import-spacing': false,
        'no-multi-spaces': false,
        'no-console': false,
        'space-within-parens': false,
        'arrow-parens': false,
        'max-line-length': false,
        'unified-signatures': false,
        'ter-indent': false,
        'member-ordering': false,
        'no-promise-as-boolean': true,
        'typedef-whitespace': false,
        'comment-format': false
      },
      rulesDirectory: [
        // array of paths to directories with rules, e.g. 'node_modules/tslint/lib/rules' (will be used if `lintFile` is not specified)
        'node_modules/@wwwouter/tslint-contrib',
      ],
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'key-spacing': 'off',
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-multi-spaces': 'off',
  },
}
