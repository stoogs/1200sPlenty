const express = require('express');

const app = express();

app.use(express.static("client/public"));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/client/public');
});

app.listen(3003, function() {
    console.log('App running on port 3002');
});

