const {request} = require('http')
const {parse} = require('url')

exports.requestListenerFor = ({env, argv}) => {
  return (req, res) => {
    const url = parse(req.url)
    console.log(url)
    request(url, $ => $.pipe(res))
  }
}

// server.listen(handle[, backlog][, callback])
// server.listen(options[, callback])
// server.listen(path[, backlog][, callback]) for IPC servers
// server.listen([port[, host[, backlog]]][, callback]) for TCP servers

exports.urlFor = ({argv: [,, options]}) => {
  const url = parse(options)

  return 8080
}
