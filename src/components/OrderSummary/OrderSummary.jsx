// src/components/OrderSummary/OrderSummary.jsx
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { dummyAddress } from "../../assets/assets"; // Import dummy address
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const OrderSummary = ({ router }) => {
  const { cart } = useContext(CartContext);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userAddresses, setUserAddresses] = useState([]);

  const currency = "$";

  // ✅ Utility functions
  const getCartCount = () => cart.reduce((acc, item) => acc + item.qty, 0);
  const getCartAmount = () =>
    cart.reduce((acc, item) => acc + (item.price || 0) * item.qty, 0);

  useEffect(() => {
    // Wrap dummyAddress inside an array for dropdown
    setUserAddresses([dummyAddress]);

    // Auto-select the dummy address
    setSelectedAddress(dummyAddress);
  }, []);

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setIsDropdownOpen(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-zinc-100 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
      <hr className="border-gray-500/30 my-5" />

      {/* Select Address */}
      <div className="space-y-6">
        <div>
          <label className="text-base font-medium uppercase text-gray-600 block mb-2">
            Select Address
          </label>
          <div className="relative inline-block w-full text-sm border">
            <button
              className="peer w-full text-left px-4 pr-2 py-2 bg-white text-gray-700 focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>
                {selectedAddress
                  ? `${selectedAddress.fullName}, ${selectedAddress.area}, ${selectedAddress.city}, ${selectedAddress.state}`
                  : "Select Address"}
              </span>
              <svg
                className={`w-5 h-5 inline float-right transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-0" : "-rotate-90"
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
                {userAddresses.map((address, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-500/10 cursor-pointer"
                    onClick={() => handleAddressSelect(address)}
                  >
                    {address.fullName}, {address.area}, {address.city},{" "}
                    {address.state}
                  </li>
                ))}
               <Link to="/address"
       
          className="px-4 py-2 hover:bg-gray-500/10 cursor-pointer text-center items-center"
        >
          + Add New Address
        </Link>
              </ul>
            )}
          </div>
        </div>

        {/* Promo Code */}
        <div>
          <label className="text-base font-medium uppercase text-gray-600 block mb-2">
            Promo Code
          </label>
          <div className="flex flex-col items-start gap-3">
            <input
              type="text"
              placeholder="Enter promo code"
              className="flex-grow w-full outline-none p-2.5 text-gray-600 border bg-white"
            />
            <button className="bg-gradient-to-b from-red-500 to-orange-500 text-white px-6 py-2 rounded-lg  hover:scale-105 transition-all duration-300 hover:to-orange-600 cursor-pointer ">
              Apply
            </button>
          </div>
        </div>

        <hr className="border-gray-500/30 my-5" />

        {/* ✅ Order Summary Section (No product listing, only totals) */}
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between text-base font-medium">
              <p className="uppercase text-gray-600">Items {getCartCount()}</p>
              <p className="text-gray-800">
                {currency}
                {getCartAmount()}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Shipping Fee</p>
              <p className="font-medium text-gray-800">Free</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Tax (2%)</p>
              <p className="font-medium text-gray-800">
                {currency}
                {Math.floor(getCartAmount() * 0.02)}
              </p>
            </div>
            <div className="flex justify-between text-lg md:text-xl font-medium border-t pt-3">
              <p>Total</p>
              <p>
                {currency}
                {getCartAmount() + Math.floor(getCartAmount() * 0.02)}
              </p>
            </div>
          </div>
        )}
      </div>

      <hr className="border-gray-500/30 my-5" />

      <Button
        content="Place Order"
        className="w-full bg-orange-600 text-white py-3 hover:bg-orange-700"
      />
    </div>
  );
};

export default OrderSummary;
