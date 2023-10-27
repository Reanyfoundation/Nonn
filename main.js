const http = require("http");
const app = require("./app");
const fs = require("fs");

const port = 5042;
const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    fs.readFile("index.html", function(err, data){
        if(err){
            res.write("Error: Looks like there's something bad");
        }else{
            res.write(data);
        }
    });
});

server.listen(port, main);

function main(){
    console.log(`Server establishment done on port:  ${port}`);
}