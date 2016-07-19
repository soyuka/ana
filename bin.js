'use strict'
const minimist = require('minimist')
const args = minimist(process.argv.slice(2))
const ana = require('./index.js')

let letters = args._[0]

console.log(ana(letters))

