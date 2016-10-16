var groupuris = require('../')

var agents = ['https://melvincarvalho.com/#me', 'http://csarven.ca/#i']

var turtle = groupuris.createGroup(agents)
var hash = groupuris.createHash(turtle)

console.log(turtle)
console.log(hash)
