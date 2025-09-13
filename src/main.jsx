import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FavoriteProvider } from "./context/FavoriteContext";
import { CartProvider } from "./context/CartContext";
import { AddressProvider } from "./context/AddressContext"; // ✅ import

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <FavoriteProvider>
      <CartProvider>
        <AddressProvider>   {/* ✅ wrap here */}
          <App />
        </AddressProvider>
      </CartProvider>
    </FavoriteProvider>
  </StrictMode>
);
