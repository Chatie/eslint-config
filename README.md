# eslint-config

ESLint Sharable Rules in TypeScript Standard Style

![ESLint Sharable Rules in TypeScript Standard Style](https://chatie.github.io/eslint-config/images/eslint-config-chatie.jpg)
> Source: [Using ESLint and Prettier in a TypeScript Project](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)

## USAGE

### 1. Install `@chatie/eslint-config`

```sh
npm install --save-dev @chatie/eslint-config
```

### 2. Create `.eslintrc.yaml`

In the root directory of your project (which should contains your `package.json` file), create `.eslintrc.yaml` with the following content:

```yaml
---
extends: '@chatie'
```

### 3. You are All Set

```sh
./node_modules/.bin/eslint
```

`eslint` will work and follow the @chatie rules.

## STYLES

- [JavaScript Standard Style](https://standardjs.com)
  - [ESLint Config for JavaScript Standard Style](https://github.com/standard/eslint-config-standard)

## SEE ALSO

- [ESLint Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs)
- [Using ESLint with TypeScript in 2019](https://43081j.com/2019/02/using-eslint-with-typescript)
- [From TSLint to ESLint, or How I Learned to Lint GraphQL Code](https://artsy.github.io/blog/2019/01/29/from-tslint-to-eslint/)

### tslint -> eslint

- [Roadmap: tslint-microsoft-contrib -> ESLint #876](https://github.com/microsoft/tslint-microsoft-contrib/issues/876)
- [The future of TypeScript on ESLint](https://eslint.org/blog/2019/01/future-typescript-eslint)
- [ESLint Plugin TSLint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin-tslint)

## HISTORY

### v0.x master

### v0.1 07 June 2019

1. Converted tsling.json to .eslintrc.js with the JavaScript Standard Style.

## AUTHOR

[Huan LI (李卓桓)](http://linkedin.com/in/zixia) zixia@zixia.net

[![Profile of Huan LI (李卓桓) on StackOverflow](https://stackexchange.com/users/flair/265499.png)](https://stackexchange.com/users/265499)

## COPYRIGHT & LICENSE

- Code & Docs © 2019 - now Huan LI zixia@zixia.net
- Code released under the Apache-2.0 License
- Docs released under Creative Commons
