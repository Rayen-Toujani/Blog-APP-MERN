const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app =express();
const User = require('./models/User');
app.use(cors());

app.use(express.json());

mongoose.connect('mongodb+srv://rayenyaya123:adm6FubxvVSv12sn@cluster0.2q4r43q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


app.post('/register',async(req,res)=>{
    const {username,password}= req.body;
    
    try {
        
        const userDoc = await User.create({username,password});
        res.json(userDoc);
    } catch (error) {
        res.status(400).json(error);
    }
});

app.listen(4000);