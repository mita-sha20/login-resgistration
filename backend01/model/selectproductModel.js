const mongoose = require('mongoose');
const {Schema} = mongoose

const selectproductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  categoryId:{
    type:Schema.Types.ObjectId,
    ref:"Product"
  }
});


module.exports = mongoose.model("SelectProduct",selectproductSchema)