'use strict';

const DEFAULT_PORT = 8124;
const DEFAULT_HOSTNAME = '0.0.0.0';

const net = require('net');
const uuid = require('../lib/uuid');

class TcpTransport {
  constructor() {
    this.clients = {};
  }

  listen(opts, handler) {
    let server = net.createServer(handler);
    server.listen(
      opts.port || DEFAULT_PORT,
      opts.hostname || DEFAULT_HOSTNAME
    );
    this.server = server;

    return this;
  }

  connect(opts, callback) {
    let client = net.connect(
      opts.port || DEFAULT_PORT,
      opts.hostname || DEFAULT_HOSTNAME,
      callback
    );
    this.client = client;

    return this;
  }

  removeClient(id) {
    delete this.clients[id];
  }
}

module.exports = TcpTransport;
