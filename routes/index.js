'use strict'

module.exports = function routes(server) {
  require('./health')(server)
  require('./contact')(server)
}