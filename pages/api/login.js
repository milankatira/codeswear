import User from "../../model/User";

import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        if (
          req.body.email == user.email &&
          req.body.password == user.password
        ) {
          res.status(200).json({
            message: "Login Successful",
          });
        }
        res.status(201).json(user);
      }
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export default connectDb(handler);
