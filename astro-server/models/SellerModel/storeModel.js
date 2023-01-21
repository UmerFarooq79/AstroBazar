const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
      required: 'Name is required'
    },
    img: { type: Array, required: true },
    description: {
      type: String,
      trim: true
    },
    seller: {type: mongoose.Schema.ObjectId, ref: 'Seller'}
  },
  {
    timestamps:true
})
  
module.exports = mongoose.model("Store", StoreSchema);