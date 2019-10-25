const mongoose = require("mongoose");

const product = mongoose.model("product");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await product.paginate({}, {
      page,
      limit: 10 
    });

    return res.json(products);
  },

  async show(req, res) {
    const Product = await product.findById(req.params.id);
    return res.json(Product);
  },

  async store(req, res) {
    const Product = await product.create(req.body);
    return res.json(Product);
  },

  async update(req, res) {
    //{new: true} retorna o produto atualizado para a constante Product
    const Product = await product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(Product);
  },

  async destroy(req, res) {
    await product.findByIdAndRemove(req.params.id);
    return res.send();
  }


};