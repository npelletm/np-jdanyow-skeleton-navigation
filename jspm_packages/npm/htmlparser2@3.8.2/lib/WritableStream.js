/* */ 
module.exports = Stream;
var Parser = require("./Parser"),
    WritableStream = require("stream").Writable || require('@empty').Writable;
function Stream(cbs, options) {
  var parser = this._parser = new Parser(cbs, options);
  WritableStream.call(this, {decodeStrings: false});
  this.once("finish", function() {
    parser.end();
  });
}
require("util").inherits(Stream, WritableStream);
WritableStream.prototype._write = function(chunk, encoding, cb) {
  this._parser.write(chunk);
  cb();
};
