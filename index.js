'use strict';

const Hapi = require('hapi');

const port = Number(process.argv[2]) || 80

const server = new Hapi.Server();
server.connection({ port });

require('./routes')(server)

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});