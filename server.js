const express = require("express");
const app = express();
const port = 8000;

const rappers = {
    "eminem" :{
        "birthName": "Marshal Mathers",
        "age": 40,
        "birthLocation": "Detroit"
    },
    "chance the rapper":{
        "birthName": "Chancelor Bennett",
        "age": 29,
        "birthLocation":"Chicago"
    },
    "unknown":{
        "birthName":"unknown",
        "age":0,
        "birthLocation":"unknown"
    }
}


app.get("/", (request, response)=>{
    response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response)=>{
    const name = request.params.name.toLowerCase();
    if(rappers[name]){
        response.json(rappers[name]);
    } else{
        response.json(rappers["unknown"]);
    }
    //response.json(rappers);
});

app.listen(port,()=>{
    console.log(`The server is now running on port ${port}!!`)
});