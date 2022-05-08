import React from "react";
import Link from "next/link";
import Products from "../model/Product";


import mongoose from "mongoose";

const Tshirts = ({ products }) => {
  console.log(products);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products)?.map((product) => {
              return (
                <Link
                  passHref={true}
                  href={`/product/${products[product].slug}`}
                  key={products[product]._id}
                >
                  <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                    <a className="block relative rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="m-auto h-[30vh]  md:h-[36vh] block"
                        src={products[product].img}
                      />
                    </a>
                    <div className="mt-4 text-center md:text-left">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {products[product].title}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {products[product].category}
                      </h2>
                      <p className="mt-1">{products[product].price}</p>

                      <div className="mt-1">
                        {products[product].size.includes("S") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            S
                          </span>
                        )}
                        {products[product].size.includes("m") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            m
                          </span>
                        )}
                        {products[product].size.includes("L") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            l
                          </span>
                        )}
                        {products[product].size.includes("XL") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            xl
                          </span>
                        )}
                      </div>

                      <div className="mt-1">
                        {products[product].color.includes("blue") && (
                          <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[product].color.includes("pink") && (
                          <button className="border-2 border-gray-300 ml-1 bg-pink-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[product].color.includes("red") && (
                          <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[product].color.includes("green") && (
                          <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  let products = await Products.find();

  let data = {};

  for (let item of products) {
    if (item.title in data) {
      if (
        !data[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        data[item.title].color.push(item.color);
      }
      if (!data[item.title].size.includes(item.size) && item.availableQty > 0) {
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

  return {
    props: { products: JSON.parse(JSON.stringify(data)) },
  };
}
export default Tshirts;
