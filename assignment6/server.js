const express=require('express');
const server=express();
const port=3000;


server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/index.html');
});
server.get('/welcome',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/welcome.html');
});

server.listen(port,()=>{
    console.log(`http://localhost:${port} started`);
});