'use strict'

module.exports = function (req, reply) {
  // const url =
  // const redirectTo = req.
  const redirectTo =
    req.connection.info.protocol +
    '://' +
    req.info.host +
    req.url.path +
    '.html';
  reply.redirect(redirectTo).state('affiliate', 'madeira')
}
