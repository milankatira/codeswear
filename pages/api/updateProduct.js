import Products from "../../model/Product";

import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      let products = [];
      for (let i = 0; i < req.body.length; i++) {
        const product = await Products.findByIdAndUpdate(
          req.body[i]._id,
          req.body[i]
        );
        products.push(product);
      }
      res.status(200).json({ success: "success", products });
    } else {
      res.status(400).json({ error: "This Method Is not Allowed" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export default connectDb(handler);
