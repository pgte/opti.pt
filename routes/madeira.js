'use strict'

module.exports = function (server) {
  server.route({
    method: 'GET',
    path: '/madeira',
    handler: require('../controllers/madeira')
  })
}