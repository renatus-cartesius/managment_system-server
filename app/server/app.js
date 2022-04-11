const express = require("express");
const db = require("./controllers/db");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.get("/", (req, res)=>{
    res.send("It`s ok man, Mariadb is working");
});

app.listen(port, ()=>{console.log(`Listening on ${port}`)})