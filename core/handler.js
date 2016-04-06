'use strict';

class Handler {
  constructor() {
    this.commands = {};
  }

  execute(command) {
    if (!this.commands[command]) {
      let err = new Error('No command found.');
      err.type = 'no_command_found';
      return err;
    }

    return this.commands[command].apply(this, [].slice.call(arguments, 1));
  }

  define(command, fn) {
    this.commands[command] = fn;
  }
}

module.exports = Handler;
