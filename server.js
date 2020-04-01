const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('Ready on port 3000')
})

app.get('/', function (request, response) {
    console.log('request on /');
    response.send('send response to get request')
})