const {createServer} = require('http')
const {parse} = require('url')

exports.createServer = (upstream, {requestListenerFor} = exports) => {
  return createServer(requestListenerFor(upstream))
}

exports.requestListenerFor = (upstream, {rejectUnauthorized = false} = {}) => {
  return function requestListener (req, res, {protocol, hostname, port} = parse(upstream)) {
    const {request} = require(protocol.slice(0, -1))
    delete req.headers.host // otherwise wrong port is assigned in case of redirect
    req.pipe(
      request({path: req.url, headers: req.headers, hostname, port, rejectUnauthorized}, data => {
        if (data.headers.location) {
          requestListener(req, res, parse(data.headers.location))
          return
        }
        res.writeHead(data.statusCode, data.headers)
        data.pipe(res)
      })
    )
  }
}
