const express =require('express');

const app= express();

const port = 5000;

const userRouter= require('./routers/userRouter');
const issueRouter= require('./routers/IssueRouter');
const teamRouter= require('./routers/teamRouter');
 
const cors = require('cors');
app.use(express.json()); 

app.use(cors({origin: ['http://localhost:3000'] }))   

app.use('/user', userRouter);
app.use('/issue', issueRouter);
app.use('/team', teamRouter);


app.get('/',(req,res) =>{
    res.send("Response from express");
});

app.get('/home',(req,res) =>{
    res.send("Response from express home");
});


app.listen(port,()=> console.log("server started"));