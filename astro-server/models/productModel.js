const mongoose = require("mongoose"), Schema = mongoose.Schema;

const ProductSchema = Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true, },
    img: { type: String },
    price: { type: Number, required: true },
    quantity: {type: Number, required: true},
    // rating: {type: Number},
    // feedback: {type: String},
    sellerId: {type: Schema.Types.ObjectId, ref: 'Seller'}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);