'use strict'

module.exports = function (server) {
  server.route({
    method: 'GET',
    path: '/contacts',
    handler: require('../controllers/contacts')
  })
}