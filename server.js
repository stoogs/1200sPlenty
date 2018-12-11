const express = require('express');

const app = express();

app.get('/', function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3002, function() {
    console.log('App running on port 3002');
});

