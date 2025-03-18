require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const registerModel = require('./models/User')

const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_URI, 
    {
     useNewUrlParser: true, 
     useUnifiedTopology: true 
    });

app.get("/",(req,res)=>{
    res.json("hello");
})

app.post('/register',(req,res) => {
    registerModel.create(req.body)
    .then(registers => res.json(registers))
    .catch(err => res.json(err))
})

app.post('/login',(req,res)=>{
    const{email,password} = req.body;
    registerModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("User not found")
        }
    })
})


app.post('/home',(req,res) => {
    registerModel.create(req.body)
    .then(registers => res.json(registers))
    .catch(err => res.json(err))
})
  

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
 