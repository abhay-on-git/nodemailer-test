const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name:String,
   email:String
},{timestamps:true})

const userCollection = mongoose.model('user',userSchema);

module.exports = userCollection;