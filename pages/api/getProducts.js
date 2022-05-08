import Products from "../../model/Product";

import connectDb from "../../middleware/mongoose";

export default async function handler(req, res) {
  connectDb();
    try {
      const products = await Products.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
}
