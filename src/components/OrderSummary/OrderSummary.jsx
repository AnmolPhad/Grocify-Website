import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { AddressContext } from "../../context/AddressContext";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  const { cart } = useContext(CartContext);
  const { addresses } = useContext(AddressContext);

  const [selectedAddress, setSelectedAddress] = useState(addresses[0] || null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currency = "$";

  const getCartCount = () => cart.reduce((acc, item) => acc + item.qty, 0);
  const getCartAmount = () =>
    cart.reduce((acc, item) => acc + (item.price || 0) * item.qty, 0);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-zinc-100 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
      <hr className="my-5" />

      {/* Select Address */}
      <div>
        <label className="block mb-2 font-medium">Select Address</label>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full border px-4 py-2 text-left bg-white flex justify-between items-center"
          >
            <span>
              {selectedAddress
                ? `${selectedAddress.fullName}, ${selectedAddress.area}, ${selectedAddress.city}`
                : "Select Address"}
            </span>

            {/* Dropdown Arrow */}
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#6B7280"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <ul className="absolute w-full bg-white border shadow-md mt-1 z-10 py-1.5">
              {addresses.map((address, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-500/10 cursor-pointer"
                  onClick={() => {
                    setSelectedAddress(address);
                    setIsDropdownOpen(false);
                  }}
                >
                  {address.fullName}, {address.area}, {address.city},{" "}
                  {address.state}
                </li>
              ))}
              <Link
                to="/address"
                className="block px-4 py-2 hover:bg-gray-200 text-blue-600"
              >
                + Add New Address
              </Link>
            </ul>
          )}
        </div>
      </div>

      <hr className="border-gray-500/30 my-5" />

      {/* Promo Code */}
      <div>
        <label className="text-base font-medium block mb-2">Promo Code</label>
        <div className="flex flex-col items-start gap-3">
          <input
            type="text"
            placeholder="Enter promo code"
            className="flex-grow w-full outline-none p-2.5 text-gray-600 border bg-white"
          />
          <button className="bg-gradient-to-b from-red-500 to-orange-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300 hover:to-orange-600 cursor-pointer">
            Apply
          </button>
        </div>
      </div>

      <hr className="border-gray-500/30 my-5" />

      {/* Totals */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-2">
          <div className="flex justify-between">
            <p>Items {getCartCount()}</p>
            <p>
              {currency}
              {getCartAmount()}
            </p>
          </div>
          <div className="flex justify-between">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between">
            <p>Tax (2%)</p>
            <p>
              {currency}
              {Math.floor(getCartAmount() * 0.2)}
            </p>
          </div>
          <div className="flex justify-between font-bold border-t pt-2">
            <p>Total</p>
            <p>
              {currency}
              {getCartAmount() + Math.floor(getCartAmount() * 0.02)}
            </p>
          </div>

          <hr className="border-gray-500/30 my-5" />
          <button className="bg-gradient-to-b from-red-500 to-orange-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300 hover:to-orange-600 cursor-pointer">
            Order Now
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
