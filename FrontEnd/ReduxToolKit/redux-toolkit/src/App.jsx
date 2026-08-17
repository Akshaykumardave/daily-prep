import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./Header";
import Product from "./Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartList from "./CartList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
