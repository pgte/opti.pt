'use strict'

module.exports = function (req, reply) {
  reply.redirect('https://opti.pt/madeira.html').state('affiliate', 'madeira')
}
