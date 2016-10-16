module.exports = {
  createGroup : createGroup
}

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
