const mongoose = require("mongoose");


const PostMongoose = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
     },
    email:
    {
      type: String,
      required: true,
    },

    posts:
    {
      type: String,
      required: true,
     }
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("PostMongoose", PostMongoose);