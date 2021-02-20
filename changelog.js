const conventionalChangelog = require('conventional-changelog')
const fs = require('fs')
const path = require('path')
const ws = fs.createWriteStream(path.resolve(__dirname, 'CHANGELOG.md'))
conventionalChangelog({
  preset: 'angular'
}).pipe(ws)
