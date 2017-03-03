var mongoose = require('mongoose');

var imagesSchema = mongoose.Schema(
{
  username:String,
  path:Buffer
}
)

var image = mongoose.model("image", imagesSchema);

module.exports = image;
