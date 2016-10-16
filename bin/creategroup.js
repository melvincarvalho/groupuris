#!/usr/bin/env node

var groupuris = require('../')

var agents = ['https://melvincarvalho.com/#me', 'http://csarven.ca/#i']

var turtle = groupuris.createGroup(agents)

console.log(turtle)
