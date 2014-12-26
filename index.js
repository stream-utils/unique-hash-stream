
var Transform = require('readable-stream/transform')
var stringify = require('json-stringify-safe')
var inherits = require('util').inherits
var crypto = require('crypto')

module.exports = filter

function filter(fn) {
  var stream = Unique()
  if (typeof fn === 'function') stream._calculate = fn
  return stream
}

filter.Unique = Unique
filter.calculate = calculate

inherits(Unique, Transform)

function Unique(options) {
  if (!(this instanceof Unique)) return new Unique(options)

  options = options || {}
  options.objectMode = true
  Transform.call(this, options)

  this._hashes = Object.create(null)
}

Unique.prototype._calculate = calculate
Unique.prototype._transform = function (doc, NULL, cb) {
  var hash = this._calculate(doc)
  if (this._hashes[hash]) return cb()
  this._hashes[hash] = true
  cb(null, doc)
}

Unique.prototype._flush = function (cb) {
  delete this._hashes
  cb()
}

function calculate(doc) {
  return crypto.createHash('sha256')
    .update(stringify(doc))
    .digest('base64')
}
