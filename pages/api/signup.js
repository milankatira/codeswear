import User from "../../model/User";

import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      const user = await User.create(req.body);
      res.status(201).json(user);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export default connectDb(handler);
