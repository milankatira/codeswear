import React from "react";
import Image from "next/image";
import Link from "next/link";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2">
      <div className="logo mx-5">
        <Image width={200} height={40} src="/images/logo.webp" alt="" />
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-2 font-bold md:text-bold ">
          <Link href={"/"}>
            <a>
              <li>Tshirt</li>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <li>Stickers</li>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>

      <div className="cart absolute right-0 top-4 mx-5">
        <button>
          <ShoppingCartIcon className=" text-xl md:text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
