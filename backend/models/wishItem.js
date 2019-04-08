let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let wishItemSchema = new Schema({

  //item id auto generated by mongo
  wishName: {
    type: String,
    trim: true
  },
  wishURL: {
    type: String,
    trim: true
  },
  wishPrice: {
    type: Number,
    trim: true
  },
  wishPhoto: {
    type: String,
    trim: true
  },
  userID: {
    type: String,
    trim: true
  }
});

let wishItem = mongoose.model("wishItem", wishItemSchema);

module.exports = wishItem;