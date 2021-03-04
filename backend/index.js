const express = require('express');
const app=express();
const bodyParser =require('body-parser')
const cors=require('cors')
const mysql= require('mysql')
const db=mysql.createPool({
    host:"localhost",
    user:"amal",
    password:"rjamaltdt",
    database:"elearing"
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post('/api/insert',(req,res)=>{
    const email=req.body.email
    const username=req.body.username
    const password=req.body.password
    const sqlquary="INSERT INTO usermanagement (email,username,password) VALUES (?,?,?)"
    db.query(sqlquary,[email,username,password],(err,result)=>{
        console.log(result)
    })
})

app.listen(3001, ()=>{
    console.log("backend server runing..........");
});