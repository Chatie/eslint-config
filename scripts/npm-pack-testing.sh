#!/usr/bin/env bash
set -e

npm run dist
npm run pack

TMPDIR="/tmp/npm-pack-testing.$$"
mkdir "$TMPDIR"
mv *-*.*.*.tgz "$TMPDIR"
cp -R tests/fixtures "$TMPDIR"

cd $TMPDIR
npm init -y
npm install --production \
  *-*.*.*.tgz \
  @types/blue-tape \
  @types/eslint \
  @types/glob \
  @types/node \
  @chatie/tsconfig \
  blue-tape \
  glob \
  typescript

./node_modules/.bin/tsc \
  --lib esnext \
  --strict \
  --esModuleInterop \
  --noEmitOnError \
  --noImplicitAny \
  --skipLibCheck \
  fixtures/smoke-testing.ts

cd fixtures
ln -s ../node_modules

node smoke-testing.js
