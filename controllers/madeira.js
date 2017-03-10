'use strict'

module.exports = function (req, reply) {
  reply.redirect('https://opti.pt').state('affiliate', 'madeira')
}
