import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/Homepage.component";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shoppage";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
