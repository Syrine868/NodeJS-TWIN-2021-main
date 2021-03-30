var express= require('express');
var app= express();
//création serveur http nestaaamlouh lel handshake
var server= require ('http').createServer(app);
var io = require('socket.io')(server);
app.use('/jquery', express.static(__dirname+'/node_modules/jquery/dist/'));

//Create event men chiret server avec .on
io.on('connection', function(client){
    console.log('client connected');
    client.emit('messages','Hello from server');
});
app.use(express.static(__dirname+'/public'));
app.get('/',function(req, res,next){
res.sendFile(__dirname+'/views/index.html');
})
server.listen(3000);