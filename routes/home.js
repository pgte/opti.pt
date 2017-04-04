'use strict'

module.exports = function (server) {
  server.route({
    method: 'GET',
    path: '/',
    handler: function (req, reply) {
      if ((req.info && req.info.hostname || '').indexOf('optihousing.com') >= 0) {
        reply.redirect('http://optihousing.com/en')
      } else {
        reply.redirect('/index.html')
      }
    }
  })
}