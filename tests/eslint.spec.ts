#!/usr/bin/env ts-node

import fs     from 'fs'
import path   from 'path'
import util   from 'util'

import test   from 'blue-tape'
import glob   from 'glob'

import {
  Configuration,
  Linter,
}                   from 'tslint'

const TSLINT_JSON_FILE   = path.join(__dirname, '..', 'tslint.json')
const TSCONFIG_JSON_FILE = path.join(__dirname, '..', 'tsconfig.json')

const ANTI_PATTERNS_DIR      = path.join(__dirname, 'anti-patterns')

test('Should fail for all files in anti-patterns directory', async t => {

  const options = {
      fix: false,
      formatter: 'json',
      project: TSCONFIG_JSON_FILE,
  }

  console.log(TSLINT_JSON_FILE)
  const linter = new Linter(options)
  const configuration = Configuration.findConfiguration(TSLINT_JSON_FILE).results

  const antiPatternFileList = await util.promisify(glob)(`${ANTI_PATTERNS_DIR}/**/*.ts`)

  t.ok(antiPatternFileList.length > 0, 'should get at least 1 anti pattern file')

  for (const antiPatternFile of antiPatternFileList ) {
    const fileContents = fs.readFileSync(antiPatternFile, 'utf8')
    linter.lint(antiPatternFile, fileContents, configuration)
    const result = linter.getResult()

    // console.log(result.failures)

    if (result.failures.length > 0) {
      const failure = result.failures[0]
      const ruleName = failure.getRuleName()
      const ruleDesc = failure.getFailure()
      t.pass(`${antiPatternFile}: ${ruleName}: ${ruleDesc}`)
    } else {
      t.fail(`${antiPatternFile}: no failure detected`)
    }
  }

})
