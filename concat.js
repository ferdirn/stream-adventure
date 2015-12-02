var concat = require('concat-stream')

process.stdin.pipe(concat(function(text) {
    process.stdout.write(text.reverse())
}))