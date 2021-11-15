const express=require('express');
const server=express();
const port=8080;
server.use(express.json());
server.use(express.urlencoded({extended:true}));



server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/index.html');
});



server.get('/js/validate.js' , (req,res)=>{
    res.sendFile(__dirname+'/js/validate.js');
})



server.get('/welcome.html',(req,resp)=>{
    const name=req.query.firstName;
    const lastName=req.query.lastName;
    const cityName=req.query.cityName;
    console.log(" First Name :"+name);
    console.log(" lastName: "+lastName); 
    console.log(" cityName: "+cityName);
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/welcome.html'); 
});


server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});