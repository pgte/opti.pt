'use strict';

const Hapi = require('hapi');

const port = Number(process.argv[2]) || 80

const server = new Hapi.Server();
server.connection({ port });

require('./routes')(server)

const TTL = 10 * 365 * 24 * 60 * 60 * 1000

server.state('affiliate', {
  isHttpOnly: false,
  isSecure: false,
  encoding: 'none',
  ttl: TTL,
  path: '/',
  domain: 'opti.pt',
  autoValue: function (req, next) {
    next(null, req.state('affiliate'))
  }
})

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});