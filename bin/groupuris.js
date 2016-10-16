#!/usr/bin/env node

var groupuris = require('../')
var program = require('commander')

program
  .parse(process.argv)

var agents = ['https://melvincarvalho.com/#me', 'http://csarven.ca/#i']
console.log(program.args)
if (program.args.length !== 0) {
  agents = program.args
}

var turtle = groupuris.agentsToGroup(agents)
var hash = groupuris.toSha256Base64url(turtle)

console.log(turtle)
console.log(hash)
