'use strict'

module.exports = function (server) {
  server.route({
    method: 'GET',
    path: '/health',
    handler: function (req, reply) {
      reply('OK')
    }
  })
}