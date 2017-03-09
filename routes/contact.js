'use strict'

module.exports = function (server) {
  server.route({
    method: 'POST',
    path: '/contact',
    handler: require('../controllers/post-contact')
  })
}