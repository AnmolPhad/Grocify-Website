import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, addToCart, decreaseQty, removeFromCart, clearCart } =
    useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center mt-10">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-lg text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left bg-white p-4 rounded-lg shadow gap-6"
              >
                {/* Product Image + Info */}
                <div className="flex items-center md:gap-15 gap-4 flex-1 justify-center md:justify-start">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain"
                  />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">{item.name}</h3>
                    <p className="text-base md:text-lg">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 justify-center md:mr-50">
                  <button
                    onClick={() => decreaseQty(item.name)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    ➖
                  </button>
                  <span className="text-lg font-semibold">{item.qty}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    ➕
                  </button>
                </div>

                {/* Price */}
                <div className="text-lg font-bold min-w-[80px] text-center md:text-right md:-ml-21">
                  ${(item.price * item.qty).toFixed(2)}
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="text-red-500 text-sm hover:underline  md:ml-21 "
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Total */}
          <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-center md:text-left mt-8 border-t pt-4 gap-4">
            <h3 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h3>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
