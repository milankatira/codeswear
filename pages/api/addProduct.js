import Products from "../../model/Product";

import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      req.body[0]
      for (let i = 0; i < req.body.length; i++) {
        let product = new Products(req.body[i]);
        await product.save();
        res.status(200).json({ message: "Product added successfully" });
      }
    } else {
      res.status(400).json({ error: "This Method Is not Allowed" });
    }
  } catch (err) {
    res.status(500);

    console.log(err);
  }
};

export default connectDb(handler);
