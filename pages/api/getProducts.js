import Products from "../../model/Product";

import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json({ products });
  } catch (err) {

    console.log(err)
    res.status(500).json(err);
  }
};

export default connectDb(handler);
