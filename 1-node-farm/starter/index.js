const fs = require('fs');

//asynchronous or non-blocking code
fs.readFile("./txt/start.txt", 'utf-8', function (err, data) {
    console.log(data);
});
