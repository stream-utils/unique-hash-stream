
# unique-hash-stream

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

Filter duplicates from a stream based on a hashing function.
By default, this hashing function is:

```js
sha256sum(JSON.stringify(doc))
```

## API

### var stream = unique([fn])

Where you can supply your own hashing function.

[gitter-image]: https://badges.gitter.im/stream-utils/unique-hash-stream.png
[gitter-url]: https://gitter.im/stream-utils/unique-hash-stream
[npm-image]: https://img.shields.io/npm/v/unique-hash-stream.svg?style=flat-square
[npm-url]: https://npmjs.org/package/unique-hash-stream
[github-tag]: http://img.shields.io/github/tag/stream-utils/unique-hash-stream.svg?style=flat-square
[github-url]: https://github.com/stream-utils/unique-hash-stream/tags
[travis-image]: https://img.shields.io/travis/stream-utils/unique-hash-stream.svg?style=flat-square
[travis-url]: https://travis-ci.org/stream-utils/unique-hash-stream
[coveralls-image]: https://img.shields.io/coveralls/stream-utils/unique-hash-stream.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/stream-utils/unique-hash-stream
[david-image]: http://img.shields.io/david/stream-utils/unique-hash-stream.svg?style=flat-square
[david-url]: https://david-dm.org/stream-utils/unique-hash-stream
[license-image]: http://img.shields.io/npm/l/unique-hash-stream.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/unique-hash-stream.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/unique-hash-stream
[gittip-image]: https://img.shields.io/gratipay/jonathanong.svg?style=flat-square
[gittip-url]: https://gratipay.com/jonathanong/
