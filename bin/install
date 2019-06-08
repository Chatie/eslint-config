#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const pkgUp = require('pkg-up')

const ESLINTRC_YAML_CONTENT = `---
extends: '@chatie'
`

async function main () {
  const cwd = path.join(__dirname, '..', '..')
  const pkg = await pkgUp({ cwd })
  if (!pkg) {
    return 0
  }
  const pkgDir = path.dirname(pkg)

  const eslintRcFile = path.join(pkgDir, '.eslintrc.yaml')

  if (!fs.existsSync(eslintRcFile)) {
    console.info(`@chatie/eslint-config: auto generated ${eslintRcFile}`)
    fs.writeFileSync(eslintRcFile, ESLINTRC_YAML_CONTENT)
  }
  return 0
}

main()
  .then(process.exit)
  .catch(e => {
    console.info(e)
    process.exit(1)
  })
