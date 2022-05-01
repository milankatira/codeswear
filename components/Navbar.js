import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CancelIcon from "@material-ui/icons/Cancel";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl">
      <div className="logo mx-5">
        <Link href={"/"}>
          <a>
            <Image width={200} height={40} src="/images/logo.webp" alt="" />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md ">
          <Link href={"/tshirts"}>
            <a>
              <li> Tshirt </li>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <li> Hoodies </li>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <li> Stickers </li>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <li> Mugs </li>
            </a>
          </Link>
        </ul>
      </div>
      <div
        className="cart absolute right-0 top-4 mx-5 cursor-pointer"
        onClick={toggleCart}
      >
        <ShoppingCartIcon className=" text-xl md:text-3xl" />
      </div>
      <div
        ref={ref}
        className="w-72 h-full hover:shadow-md hover:transition ease-in-out delay-150 sidebar absolute top-0 right-0 bg-purple-100 p-10 transform transition-transform translate-x-full rounded-l-lg duration-800"
      >
        <h2 className="font-bold text-xl text-center"> Shopping Cart </h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"
        >
          <CancelIcon />
        </span>
        <ol className="list-decimal font-semibold">
          <li>
            <div className="item flex my-3">
              <div className="w-2/3 font-semibold"> T-shirt wear the code </div>
              <div className="w-1/3 font-semibold flex items-center justify-center text-lg">
                <AddCircleOutlineIcon className="cursor-pointer" />
                <span className="mx-2">1</span>
                <RemoveCircleOutlineIcon className="cursor-pointer" />
              </div>
            </div>
          </li>
        </ol>

        <button className="flex mt-16 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg sm:mt-0">
          <AddShoppingCartIcon className="m-1"/> Checkout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
