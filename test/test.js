
var toArray = require('stream-to-array')
var assert = require('assert')

var Unique = require('..')

it('should filter duplicates', function () {
  var stream = Unique()

  stream.write(1)
  stream.write(1)
  stream.write(1)
  stream.write(2)
  stream.write(3)
  stream.write(4)
  stream.end()

  return toArray(stream).then(function (arr) {
    assert.equal(arr.length, 4)
    for (var i = 1; i <= 4; i++) {
      assert(~arr.indexOf(i))
    }
  })
})
