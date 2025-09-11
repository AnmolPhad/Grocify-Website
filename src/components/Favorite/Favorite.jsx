import React, { useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";
import Cards from "../Cards/Cards";

const Favorite = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <div className="max-w-[1400px] mx-auto px-10 mb-15">
      <h1 className=" text-[2.5rem] md:text-3xl font-bold text-zinc-800 text-center py-25 ">
        Favorite Item List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6 -mt-4">
        {favorites.length === 0 ? (
          <p className="text-center text-xl text-zinc-500 col-span-full">
            No favorite items yet.
          </p>
        ) : (
          favorites.map((item, index) => (
            <Cards 
              key={index}
              image={item.image} 
              name={item.name} 
              price={item.price} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorite;
