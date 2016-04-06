'use strict';

module.exports.serialize = serialize;
module.exports.deserialize = deserialize;
module.exports.parse = parse;

function serialize(data) {
  return JSON.stringify(data);
}

function deserialize(buf) {
  let str = buf.toString();
  return parse(str);
}

function parse(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    return err;
  }
}
