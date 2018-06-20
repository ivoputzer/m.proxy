m.proxy
===
[![ci](https://img.shields.io/travis/ivoputzer/m.proxy.svg?style=flat-square)](https://travis-ci.org/ivoputzer/m.proxy) [![dependencies](https://img.shields.io/badge/dependencies-none-blue.svg?style=flat-square&colorB=44CC11)](package.json) [![style](https://img.shields.io/badge/coding%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/) [![Coverage Status](https://img.shields.io/coveralls/ivoputzer/m.proxy.svg?style=flat-square)](https://coveralls.io/github/ivoputzer/m.proxy?branch=master) [![quality](http://npm.packagequality.com/shield/m.proxy.svg?style=flat-square&colorB=44CC11)](http://packagequality.com/#?package=m.proxy) [![node](https://img.shields.io/badge/node-6%2B-blue.svg?style=flat-square)](https://nodejs.org/docs/v6.0.0/api) [![version](https://img.shields.io/npm/v/m.proxy.svg?style=flat-square&colorB=007EC6)](https://www.npmjs.com/package/m.proxy) [![license](https://img.shields.io/npm/l/m.proxy.svg?style=flat-square&colorB=007EC6)](https://spdx.org/licenses/MIT)

**[m(icro)](https://github.com/ivoputzer/m.cro#readme)[proxy](https://github.com/ivoputzer/m.proxy)** is a lightweight es6+ powered http proxy.

### module usage
```javascript
const {createServer} = require('m.proxy')

createServer(upstream)
  .listen(80)
```

```javascript
const {createServer} = require('https')
const {requestListenerFor} = require('m.proxy')

const requestListener = requestListenerFor(upstream, {rejectUnauthorized: true})
createServer({key, cert}, requestListener)
  .listen(443)
```

### cli usage
```sh
  m.proxy <server> <upstream>
  m.proxy --version
```

### features
- [x] trivial command line interface
- [x] supports both http and https upstreams
- [x] follows loction redirects
