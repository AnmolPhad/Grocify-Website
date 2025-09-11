import React, { createContext, useState } from "react";

// create context
export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // add item
  const addToFavorites = (item) => {
    if (!favorites.find(fav => fav.name === item.name)) {
      setFavorites([...favorites, item]);
    }
  };

  // remove item
  const removeFromFavorites = (itemName) => {
    setFavorites(favorites.filter(fav => fav.name !== itemName));
  };

  // check if favorite
  const isFavorite = (itemName) => {
    return favorites.some(fav => fav.name === itemName);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
