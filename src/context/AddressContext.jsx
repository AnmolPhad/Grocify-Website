import React, { createContext, useState, useEffect } from "react";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState(() => {
    const stored = localStorage.getItem("addresses");
    return stored ? JSON.parse(stored) : [];
  });

  const addAddress = (address) => {
    setAddresses((prev) => {
      const updated = [...prev, address];
      // Save immediately to localStorage
      localStorage.setItem("addresses", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <AddressContext.Provider value={{ addresses, addAddress }}>
      {children}
    </AddressContext.Provider>
  );
};
