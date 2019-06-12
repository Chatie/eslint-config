const TSLINT_CONFIG = {
  rulesDirectory: [
    // array of paths to directories with rules, e.g. 'node_modules/tslint/lib/rules' (will be used if `lintFile` is not specified)
    'node_modules/@wwwouter/tslint-contrib',
  ],
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
    'comment-format': false,
  },
}

module.exports = {
  TSLINT_CONFIG,
}
