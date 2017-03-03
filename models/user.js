var mongoose = require('mongoose');
var userschema = mongoose.Schema(
{
  hasPortfolio: Boolean,
  username:
  {
      type:String,
      required:true,
      unique:true
  },
  password:String
})

var user = mongoose.model("user", userschema);

module.exports = user;
