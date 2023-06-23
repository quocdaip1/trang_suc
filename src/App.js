import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ProductPage from "./pages/productPage"
import CartPage from "./pages/cartPage";
import DefaultLayout from "./pages/DefaultLayout/DefaultLayout"
function App() {
  return (
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jewelry/:category" element={<ProductPage />} />
          <Route path="/jwelry/cart" element={<CartPage />} />
        </Routes>
      </DefaultLayout>
  );
}

export default App;
