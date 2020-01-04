/* eslint-disable linebreak-style */
const mongoose = require("mongoose");

const tasks= new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  dateadded:String
})

const mentor = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  image:{
    type:String
  },
  age: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  tasks:[tasks],
  mobile:Number,
  dateadded:String,
  datemodified:String
});

module.exports = mongoose.model("mentor", mentor);
