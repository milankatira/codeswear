import Products from "../../model/Product";

import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  try {
    const products = await Products.find({ category: "t-sddhirt" });

    let data={}
     for (let item of products) {
       if (item.title in data) {
         if (
           !data[item.title].color.includes(item.color) &&
           item.availableQty > 0
         ) {
           data[item.title].color.push(item.color);
         }
         if (
           !data[item.title].size.includes(item.size) &&
           item.availableQty > 0
         ) {
           data[item.title].size.push(item.size);
         }
       } else {
         data[item.title] = JSON.parse(JSON.stringify(item));
         if (item.availableQty > 0) {
           data[item.title].color = [item.color];
           data[item.title].size = [item.size];
         }
       }
     }

    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json(err);
  }
};

export default connectDb(handler);
