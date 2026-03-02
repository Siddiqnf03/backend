//http : http(hyper text transfer protocol:)it is used build relation between client and server

// creatin a server using http.createServer();

const http = require('http');

const Server = http.createServer(function(req, res){
    res.write("HII SIDDIQ");
    res.end()
});

Server.listen(3000);

