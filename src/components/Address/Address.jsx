import React, { useState } from "react";
import { dummyAddress } from "../../assets/assets"; // if you want to use dummy later
import myLocationImage from "../../assets/my_location_image.svg"; // your svg

const AddAddress = () => {
  const [address, setAddress] = useState({
    fullName: "",
    phoneNumber: "",
    pincode: "",
    area: "",
    city: "",
    state: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Saved Address:", address);
    // Later: save to context / API
  };

  return (
    <div className="px-6 md:px-16 lg:px-32 py-16 flex flex-col md:flex-row justify-between items-start gap-12 mt-12 -mb-25 md:mb-1">
      {/* Form Section */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow"
      >
        <p className="text-2xl md:text-3xl text-gray-500">
          Add Shipping <span className="font-semibold text-orange-600">Address</span>
        </p>

        <div className="space-y-3 mt-10">
          <input
            type="text"
            placeholder="Full name"
            className="px-2 py-2.5 border border-gray-300 rounded w-full outline-none text-gray-600 focus:border-orange-500 transition"
            value={address.fullName}
            onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone number"
            className="px-2 py-2.5 border border-gray-300 rounded w-full outline-none text-gray-600 focus:border-orange-500 transition"
            value={address.phoneNumber}
            onChange={(e) =>
              setAddress({ ...address, phoneNumber: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Pin code"
            className="px-2 py-2.5 border border-gray-300 rounded w-full outline-none text-gray-600 focus:border-orange-500 transition"
            value={address.pincode}
            onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
          />
          <textarea
            rows={4}
            placeholder="Address (Area and Street)"
            className="px-2 py-2.5 border border-gray-300 rounded w-full outline-none text-gray-600 focus:border-orange-500 transition resize-none"
            value={address.area}
            onChange={(e) => setAddress({ ...address, area: e.target.value })}
          />
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="City/District/Town"
              className="px-2 py-2.5 border border-gray-300 rounded w-full outline-none text-gray-600 focus:border-orange-500 transition"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
            />
            <input
              type="text"
              placeholder="State"
              className="px-2 py-2.5 border border-gray-300 rounded w-full outline-none text-gray-600 focus:border-orange-500 transition"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-orange-600 text-white py-3 rounded hover:bg-orange-700 uppercase"
        >
          Save address
        </button>
      </form>

      {/* Image Section */}
          <div className="flex flex-1 justify-center items-center mt-20">
        <img
          src={myLocationImage}
          alt="Location Illustration"
          className="hidden md:block w-80"
        />
      </div>
    </div>
  );
};

export default AddAddress;
