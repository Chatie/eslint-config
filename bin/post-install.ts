#!/usr/bin/env node

import fs     from 'fs'
import path   from 'path'

import pkgUp from 'pkg-up'

const ESLINTRC_YAML_CONTENT = `---
extends: '@chatie'
`

async function main (): Promise<number> {
  const pkg = await pkgUp()
  if (!pkg) {
    console.info('@chatie/eslint-config: failed to find package directory.')
    return 1
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
