import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FavoriteProvider } from "./context/FavoriteContext";
import { CartProvider } from "./context/CartContext"; // 👈 import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoriteProvider>
      <CartProvider>   
        <App />
      </CartProvider>
    </FavoriteProvider>
  </StrictMode>
);
