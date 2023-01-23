const xxhash = require('@node-rs/xxhash');

module.exports = (input) => 
  Buffer.from(xxhash.xxh32(input).toString(16), 'hex').toString('base64url');