import React from "react";
import "./MainLayout.css";
import Navbar from "../../organisms/Navbar/Navbar";
import ManageProduct from "../../pages/ManageProduct/ManageProduct";
import Footer from "../../organisms/Footer/Footer";
import ProductDisplay from "../../molecules/ProductDisplay/ProductDisplay";
const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <Navbar />
      <ManageProduct />
      <ProductDisplay />
      <Footer />
    </div>
  );
};
export default MainLayout;
