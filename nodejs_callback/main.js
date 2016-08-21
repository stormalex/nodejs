var fs = require("fs");

var data = fs.readFileSync('input.txt');


console.log("blocking:\n=============");
console.log(data.toString());
console.log("process done!");

console.log("no blocking:\n=============");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("process done!");

