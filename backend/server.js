const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');


const app = express();
require('dotenv').config();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//routes
app.use(todoRoutes);


//connecting to database
mongoose.connect(process.env.DB_CONNECTION_STRING)
.then(_=>{
  app.listen(process.env.PORT)
  console.log('App is working in port 4000')
})
