import React, { useContext } from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";
import { FavoriteContext } from "../../context/FavoriteContext";
import { CartContext } from "../../context/CartContext";

const Cards = ({ image, name, price }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useContext(FavoriteContext);
  const { addToCart } = useContext(CartContext);

  const toggleFavorite = () => {
    if (isFavorite(name)) {
      removeFromFavorites(name);
    } else {
      addToFavorites({ image, name, price });
    }
  };

  return (
    <div className="bg-zinc-100 p-5 rounded-xl">
      {/* card icons */}
      <div className="flex justify-between">
        <button
          onClick={toggleFavorite}
          className={`text-3xl transition-colors ${
            isFavorite(name) ? "text-red-500" : "text-zinc-300 hover:text-red-500"
          }`}
        >
          <FaHeart />
        </button>

        <button
          onClick={() => addToCart({ image, name, price })}
          className="bg-gradient-to-b from-red-500 to-orange-500 text-white text-xl px-4 py-3 rounded-lg"
        >
          <FaPlus />
        </button>
      </div>

      {/* card img */}
      <div className="w-full h-50">
        <img src={image} className="w-full h-full object-contain mx-auto" alt={name} />
      </div>

      {/* card content */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-2xl font-bold mt-4 mb-3">${price.toFixed(2)}/kg</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default Cards;
