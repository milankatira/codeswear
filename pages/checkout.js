import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const Checkout = ({ card, addtoCard, removeFromCard, clearCart, subTotal }) => {
  return (
    <div className="container px-2 sm:px-40">
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>

      <h2 className="font-semibold text-xl">1.Delivery Details</h2>

      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div className="relative mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            type="address"
            id="address"
            name="address"
            cols={30}
            rows={2}
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          phone,city,state
        </div>
      </div>

      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              phone
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">
              city
            </label>
            <input
              type="city"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              state
            </label>
            <input
              type="state"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              pincode
            </label>
            <input
              type="pincode"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>

      <h2 className="font-semibold text-xl">2.Review card items</h2>

      <div className="bg-purple-100 p-6 m-2 rounded-l-lg sidebar">
        <ol className="list-decimal font-semibold">
          {Object.keys(card).length === 0 && (
            <div className="my-4 font-normal">no item in a card</div>
          )}
          {Object.keys(card).length > 0 &&
            Object.keys(card).map((i) => {
              return (
                <li key={i}>
                  <div className="item flex my-3">
                    <div className=" font-semibold"> {card[i].name}</div>
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
          <span className="font-bold">{subTotal}</span>
      </div>
    </div>
  );
};

export default Checkout;
