const mongoose = require('mongoose');
require('dotenv').config();
const database = process.env.ATLAS_URI;


const connectDB = async() => { 
    try {
        await mongoose.connect (database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
   console.log(`connected to database`);
  } catch (error) {
    console.log('Error while connecting to database');
    console.log(error);
  }
}

module.exports = connectDB;

