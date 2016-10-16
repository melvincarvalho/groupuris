[![Stories in Ready](https://badge.waffle.io/melvincarvalho/groupuris.png?label=ready&title=Ready)](https://waffle.io/melvincarvalho/groupuris)

<a href="https://nodei.co/npm/groupuris/"><img src="https://nodei.co/npm/groupuris.png?downloads=true"></a>

[![NPM Version](https://img.shields.io/npm/v/groupuris.svg?style=flat)](https://npm.im/groupuris)
[![Build Status](https://travis-ci.org/melvincarvalho/groupuris.svg?branch=master)](https://travis-ci.org/melvincarvalho/groupuris)


### Group URIs

Implementation of the [groupuris](
https://solid-live.github.io/specs/groupuris/) spec

####install:
```bash
npm install -g groupuris
```

####commandline:
```bash
$ groupuris https://melvincarvalho.com/#me http://csarven.ca/#i
GE7vGwCUU_3mX3PMy5cefAAZ4_zuBpFq-mHyF1CZ7nM
```

####node:
```js
var groupuris = require('groupuris');

var agents = ['https://melvincarvalho.com/#me', 'http://csarven.ca/#i']
var turtle = groupuris.agentsToGroup(agents)
var hash = groupuris.toSha256Base64url(turtle)

console.log(hash)
```

license:
  MIT
