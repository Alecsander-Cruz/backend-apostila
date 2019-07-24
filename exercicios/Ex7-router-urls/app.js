var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){

    if (request.url == '/'){
        fs.readFile(__dirname + '/inverno.html', function(erro, html){
            response.writeHeader(200, {'Conten-Type': 'text/html'});
            response.write(html);
            response.end();
        });
    }
    else if (request.url == '/inverno'){
        fs.readFile(__dirname + '/inverno.html', function(erro, html){
            response.writeHeader(200, {'Conten-Type': 'text/html'});
            response.write(html);
            response.end();
        });
    }
    else if (request.url == '/verao'){
        fs.readFile(__dirname + '/verao.html', function(erro, html){
            response.writeHeader(200, {'Conten-Type': 'text/html'});
            response.write(html);
            response.end();
        });
    }
    else {
        fs.readFile(__dirname + '/erro.html', function(erro, html){
            response.writeHeader(200, {'Conten-Type': 'text/html'});
            response.write(html);
            response.end();
        });
    }
});

server.listen(3000, function(){
    console.log('O server ta monstro!!!');
})