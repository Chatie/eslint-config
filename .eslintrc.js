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
    project: "tsconfig.json",
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "@typescript-eslint/tslint/config": [
      "error",
      {
        "lintFile": "./tslint.json", // path to tslint.json of your project
      },
    ],
    'no-multi-spaces': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': ['error', { allow: ['info'] }],
  },
}
