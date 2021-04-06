const express = require('express');
const app = express();
const cors = require("cors")
const mysql =require('mysql')
const db = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database :"gesta",
});

app.use(cors())
  
app.get("/",function (req,res){
    let obj = [
        {
            nom: "aze",
            age: 17
        },
        {
            nom: "aze",
            age: 17
        }
    ]

    res.send(obj).end(200)
})

app.post('/login', (req,res) => {
    let user = {
        username: req.params.username,
        password: req.params.password
    }
    res.end(404)
})

app.listen (3001, ()=> {
    console.log ("running on port 3001");
});