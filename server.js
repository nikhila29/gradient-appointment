const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const appointmentRoutes = require('./routes/appointmentBooking');
const PORT = 5000

//vIafUdMR9CVwM8Vp
const app = express();

app.use(express.json())
app.use(express.urlencoded())
app.use(cors());
app.use(bodyParser.json());

const MONGODB_URI = 'mongodb+srv://nikhilabadri2929:vIafUdMR9CVwM8Vp@cluster0.tjmzzrz.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// mongoose.connect('mongodb+srv://nikhila2929:3OzbSlA8zFbFuO33@cluster0.jdb9h1g.mongodb.net/?retryWrites=true&w=majority',{
//     useNewUrlParser:true,
//     useUnifiedTopology: true

// })
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongo yeahhoo")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

app.use(appointmentRoutes);

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})
