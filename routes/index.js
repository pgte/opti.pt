'use strict'

module.exports = function routes(server) {
  require('./health')(server)
  require('./contact')(server)
  require('./madeira')(server)
  require('./contacts')(server)
}