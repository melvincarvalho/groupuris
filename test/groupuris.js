var groupuris = require('../')

var expect = require('chai').expect

describe('Groupuris Functions', function () {

  describe('agentsToGroup', function () {
    it('agentsToGroup is a function', function () {
      expect((groupuris.agentsToGroup)).to.be.a('function')
    })

    var agents = ['https://melvincarvalho.com/#me', 'http://csarven.ca/#i']

    var group = '_: <https://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Group> .\n\
_: <http://xmlns.com/foaf/0.1/member> <http://csarven.ca/#i> .\n\
_: <http://xmlns.com/foaf/0.1/member> <https://melvincarvalho.com/#me> .\n'

    it('test agentsToGroup([\'https://melvincarvalho.com/#me\', \'http://csarven.ca/#i\']) = \'' + group + '\'', function () {
      expect((groupuris.agentsToGroup(agents))).to.equal(group)
    })
  })

  describe('toSha256Base64url', function () {
    it('toSha256Base64url is a function', function () {
      expect((groupuris.toSha256Base64url)).to.be.a('function')
    })

    var group = '_: <https://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Group> .\n\
_: <http://xmlns.com/foaf/0.1/member> <http://csarven.ca/#i> .\n\
_: <http://xmlns.com/foaf/0.1/member> <https://melvincarvalho.com/#me> .\n'

    var base64url = 'GE7vGwCUU_3mX3PMy5cefAAZ4_zuBpFq-mHyF1CZ7nM'

    it('test agentsToGroup([\'' + group + '\']) = \'' + base64url + '\'', function () {
      expect((groupuris.toSha256Base64url(group))).to.equal(base64url)
    })
  })

})
