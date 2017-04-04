'use strict'

module.exports = function (server) {
  server.route({
    method: 'GET',
    path: '/',
    handler: function (req, reply) {
      if ((req.url.hostname || '').indexOf('optihousing.com') >= 0) {
        reply.redirect('https://optihousing.com/en')
      } else {
        reply.redirect('/index.html')
      }
    }
  })
}