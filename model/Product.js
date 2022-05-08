import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductsSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
      unique: true,
    },
    dsc: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
    price: {
      type: Number,
      require: true,
    },
    availableQty: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.models={}
export default mongoose.model("Product", ProductsSchema);
