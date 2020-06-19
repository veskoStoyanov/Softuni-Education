const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

//mongodb+srv://admin:1989Detelina@cluster0-uqutx.mongodb.net/test?retryWrites=true&w=majority

app.use(cors({
    origin: true,
  }));

//routes
require('./config/routes')(app);


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    });
}

const uri = process.env.mongodb || 'mongodb://localhost:27017/motoDb';
mongoose.connect(uri,
{
    useNewUrlParser: true,
    useFindAndModify: false
},(err)=>{
    if(err){
        process.exit(1);
        console.log('unable to connect to database');
    }
    else
        console.log('successfully connected to the database');
});

const port = process.env.PORT || 9999;
app.listen(port,()=>{
    console.log('app is running');
});