const express = require('express');
const app = express();
dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send('Hello from Elastic Beanstalk!')
})

app.use("*",(req,res)=>{
    res.status(404).send('Page not found')
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})