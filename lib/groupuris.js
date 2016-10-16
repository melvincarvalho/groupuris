module.exports = {
  createGroup : createGroup,
  createHash : createHash
}

var base64url = require('base64url')
var SHA256 = require("crypto-js/sha256");

/**
 * Creates a group from a list of agents
 * @param  {Array} agents Array of agents
 * @return {String}       Turtle for a foaf group
 */
function createGroup(agents) {
  var group = '_: <https://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Group> .\n'

  agents = agents.sort()

  for (var i = 0; i < agents.length; i++) {
    var agent = agents[i]
    group += '_: <http://xmlns.com/foaf/0.1/member> <' + agent + '> . \n'
  }
  return group
}


/**
 * create base64url of shaa256 hash from string
 * @param  {string} str The string to hash
 * @return {string}     The hash
 */
function createHash(str) {
  var hash = SHA256(str).toString()
  var base64 = base64url(hash)
  return base64
}
