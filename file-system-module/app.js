// reading a file with file system module
var fs = require ('fs')

fs.readFile ('calc.js', 'utf8', function (err, data){
    console.log(data);
})

// writng a new file calc1.js with file system

fs.writeFile ('calc.js', 'var = a + b', function (err) {
    console.log("data saved");
})

// appending a code to the end of calc.js 

fs.appendFile ('calc.js', 'var add = 5 + 8; result = console.log(add)', function (err) {
    console.log('saved');
})

// deleting a file with file system

fs.unlink ('calc11.js', function (err){
    console.log('done');
})
