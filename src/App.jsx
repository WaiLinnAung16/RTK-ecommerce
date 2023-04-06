import React from "react";
import { Route, Routes } from "react-router-dom";
import AddToCart from "./components/AddToCart";
import Products from "./components/Products";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
      </Routes>
    </div>
  );
};

export default App;
