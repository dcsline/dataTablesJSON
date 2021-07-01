var express = require('express');
//var fs = require('fs');
var path = require('path');
var jsonfile = require('jsonfile')
var app = express();  
const http = require('http').Server(app);
const io = require('socket.io')(http);
var obj;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    s='/public/Orders.html';
   res.sendFile(path.join(__dirname + s)); 
});



io.on('connection', function(socket) {
   console.log('A user connected');

	socket.on('disconnect', function () {
      console.log('A user disconnected');
   });

    socket.on('find', data => {
    const file = './orders.json';
    jsonfile.readFile(file)
      .then(contents => {
         socket.emit('result', contents)
      })
      .catch(error => console.error(error))  
   });

});

http.listen(3000, function() {
   console.log('listening on *:3000');
});

