const Product = require("../model/product");

//get all product

const getALLProduct = async (req, res) => {
  const product = await Product.find({});
  res.status(200).json(product);
};

const postProduct = async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
    });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getALLProduct, postProduct };
