Just a little module to try a couple of ideas out, it just extends https://github.com/adaltas/node-csv-parse

An example using this module:

```
'use strict'
const CsvParser = require('csv-parser')
const assert = require('assert')
const output = []

const parser = new CsvParser({
  delimiter: ':'
})
// Use the readable stream api
parser.on('readable', function () {
  let record
  while ((record = parser.read())) {
    output.push(record)
  }
})
// Catch any error
parser.on('error', function (err) {
  console.error(err.message)
})
parser.on('end', function () {
  assert.deepStrictEqual(
    output,
    [
      ['root', 'x', '0', '0', 'root', '/root', '/bin/bash'],
      ['someone', 'x', '1022', '1022', '', '/home/someone', '/bin/bash']
    ]
  )
})
parser.write('root:x:0:0:root:/root:/bin/bash\n')
parser.write('someone:x:1022:1022::/home/someone:/bin/bash\n')
// Close the readable stream
parser.end()
```