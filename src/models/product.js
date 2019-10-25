const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

productSchema.plugin(mongoosePaginate);

//Registra o model na aplicação
//model product com as propriedades de productSchema
mongoose.model("product", productSchema);

