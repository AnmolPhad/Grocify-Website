// src/context/AddressContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState(() => {
    // Load from localStorage if available
    const stored = localStorage.getItem("addresses");
    return stored ? JSON.parse(stored) : [];
  });

  const addAddress = (address) => {
    setAddresses((prev) => [...prev, address]);
  };

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  return (
    <AddressContext.Provider value={{ addresses, addAddress }}>
      {children}
    </AddressContext.Provider>
  );
};
