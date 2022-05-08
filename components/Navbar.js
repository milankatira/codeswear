import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CancelIcon from "@material-ui/icons/Cancel";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const Navbar = ({ card, addtoCard, removeFromCard, clearCart, subTotal }) => {
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
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl sticky top-0 z-10 bg-white">
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
      <div className="cart absolute right-0 top-4 mx-5 cursor-pointer">
        <Link href="/login">
          <AccountCircleIcon className="mr-2  text-xl md:text-3xl" />
        </Link>
        <ShoppingCartIcon
          onClick={toggleCart}
          className=" text-xl md:text-3xl"
        />
      </div>
      <div
        ref={ref}
        className={`w-72 h-[100vh] hover:shadow-md hover:transition ease-in-out delay-150 sidebar absolute top-0 right-0 bg-purple-100 p-10 transform transition-transform ${
          Object.keys(card).length !== 0 ? "translate-x-0" : "translate-x-full"
        } translate-x-full rounded-l-lg duration-800`}
      >
        <h2 className="font-bold text-xl text-center"> Shopping Cart </h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"
        >
          <CancelIcon />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(card).length === 0 && (
            <div className="my-4 font-normal">no item in a card</div>
          )}
          {Object.keys(card).length > 0 &&
            Object.keys(card).map((i) => {
              return (
                <li key={i}>
                  <div className="item flex my-3">
                    <div className="w-2/3 font-semibold"> {card[i].name}</div>
                    <div className="w-1/3 font-semibold flex items-center justify-center text-lg">
                      <AddCircleOutlineIcon
                        onClick={() => {
                          addtoCard(
                            i,
                            1,
                            card[i].price,
                            card[i].name,
                            card[i].size,
                            card[i].variant
                          );
                        }}
                        className="cursor-pointer"
                      />
                      <span className="mx-2"> {card[i].qty}</span>
                      <RemoveCircleOutlineIcon
                        className="cursor-pointer"
                        onClick={() => {
                          removeFromCard(
                            i,
                            1,
                            card[i].price,
                            card[i].name,
                            card[i].size,
                            card[i].variant
                          );
                        }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
        </ol>
        <div className="font-bold my-12">subTotal: {subTotal}</div>
        <div className="flex">
          <Link href="/checkout">
            <button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
              <AddShoppingCartIcon className="mr-2" /> Checkout
            </button>
          </Link>

          <button
            onClick={clearCart}
            className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"
          >
            clear cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
