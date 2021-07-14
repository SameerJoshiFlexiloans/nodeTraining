const fs=require("fs");
const http=require("http");


//Appending lines to file
fs.writeFileSync("text.txt","This is first line",{flag:'a'});
fs.writeFileSync("text.txt","\nThis is second line I am using",{flag:'a'});
fs.writeFileSync("text.txt","\nThis is third line",{flag:'a'});

http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/plain'});
    res.write("Server is up and running");
    res.end();
}).listen(8080);
