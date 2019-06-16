#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const pkgUp = require('pkg-up')

const ESLINTRC_YAML_CONTENT = `
const rules = {
}

module.exports = {
  extends: '@chatie',
  rules,
}
`

async function main () {
  const cwd = path.join(__dirname, '..', '..')
  const pkgFile = await pkgUp({ cwd })
  if (!pkgFile) {
    return 0
  }
  const pkgDir = path.dirname(pkgFile)

  const eslintRcJsFile = path.join(pkgDir, '.eslintrc.js')

  if (!fs.existsSync(eslintRcJsFile)) {
    console.info(`@chatie/eslint-config: auto generated ${eslintRcJsFile}`)
    fs.writeFileSync(eslintRcJsFile, ESLINTRC_YAML_CONTENT)
  }
  return 0
}

main()
  .then(process.exit)
  .catch(e => {
    console.info(e)
    process.exit(1)
  })
