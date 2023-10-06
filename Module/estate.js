const mongoose = require("mongoose");
const { Schema } = mongoose;

const RealEstateSchemma = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
  },
  address : {
    type: String,
  },
  image : {
    type: String,
  },
  price : {
    type: String
  },
  like: {
    type: Boolean,
    default: false, 
  },
  popular : {
    type : Boolean,
    default : false
  },
  stats : {
    type : String,
    
  }
    
});
const Estate = mongoose.model("realEstate", RealEstateSchemma);

module.exports = Estate;
