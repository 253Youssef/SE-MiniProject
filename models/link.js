var mongoose = require('mongoose');

var linkSchema = mongoose.Schema(
{
  username:String,
  URL: String
}
)
var link = mongoose.model("link", linkSchema);

module.exports = link;
