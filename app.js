import express from 'express';

const app = express();

app.get("/",(request, response, next) =>{
    response.send("Hello World 11");
})

app.listen(process.env.PORT, ()=>{
    console.log("Server Working");
})