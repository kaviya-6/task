//importing express
const express =require('express');
//creating a server
const server=express();
//creating a port number
const port=5000;
const items=[{id:1,name:'jeans'},
    {id:2,name:'skirts'},
    {id:3,name:'kurthis'}];
    //middleware
    server.use(express.json);
    server.get('/',(req,res)=>{
        res.end=
    }
    )
server.get('/',(req,res)=>
    {res.end("kavya's server is running");

    }
);
server.get('/product',(req,res)=>{
    res.json(items);
})
server.post('/product',(req,res)=>{
    newitem={id:items.length+1,name:req.body.name};
    items.push(newitem);
})
server.listen(port,()=>{
    console.log("server is running on http://localhost:${port}")
});

server.put('/productid')