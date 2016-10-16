#!/usr/bin/env node

var groupuris = require('../')

var agents = ['https://melvincarvalho.com/#me', 'http://csarven.ca/#i']

var turtle = groupuris.agentsToGroup(agents)
var hash = groupuris.toSha256Base64url(turtle)

console.log(turtle)
console.log(hash)
