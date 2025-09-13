// src/pages/Address.jsx
import React, { useState } from "react";
import myLocationImage from "../../assets/my_location_image.svg";

const Address = () => {
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

    // ✅ Do NOT save anywhere, just reset
    setAddress({
      fullName: "",
      phoneNumber: "",
      pincode: "",
      area: "",
      city: "",
      state: "",
    });

    alert("✅ Not saved anywhere currently.");
  };

  return (
    <div className="px-6 md:px-16 lg:px-32 py-16 flex flex-col md:flex-row justify-between items-start gap-12 mt-12">
      {/* Form Section */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow"
      >
        <p className="text-2xl md:text-3xl text-gray-500">
          Add Shipping{" "}
          <span className="font-semibold text-orange-600">Address</span>
        </p>

        <div className="space-y-3 mt-10">
          <input
            type="text"
            placeholder="Full name"
            className="px-2 py-2.5 border rounded w-full outline-none"
            value={address.fullName}
            onChange={(e) =>
              setAddress({ ...address, fullName: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Phone number"
            className="px-2 py-2.5 border rounded w-full outline-none"
            value={address.phoneNumber}
            onChange={(e) =>
              setAddress({ ...address, phoneNumber: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Pin code"
            className="px-2 py-2.5 border rounded w-full outline-none"
            value={address.pincode}
            onChange={(e) =>
              setAddress({ ...address, pincode: e.target.value })
            }
            required
          />
          <textarea
            rows={4}
            placeholder="Address (Area and Street)"
            className="px-2 py-2.5 border rounded w-full outline-none resize-none"
            value={address.area}
            onChange={(e) =>
              setAddress({ ...address, area: e.target.value })
            }
            required
          />
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="City/District/Town"
              className="px-2 py-2.5 border rounded w-full outline-none"
              value={address.city}
              onChange={(e) =>
                setAddress({ ...address, city: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="State"
              className="px-2 py-2.5 border rounded w-full outline-none"
              value={address.state}
              onChange={(e) =>
                setAddress({ ...address, state: e.target.value })
              }
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-orange-600 text-white py-3 rounded hover:bg-orange-700 uppercase"
        >
          Reset Address
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

export default Address;
