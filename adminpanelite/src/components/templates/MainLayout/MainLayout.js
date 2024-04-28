import React from "react";
import "./MainLayout.css";
import Navbar from "../../organisms/Navbar/Navbar";
import ManageProduct from "../../pages/ManageProduct/ManageProduct";
import Footer from "../../organisms/Footer/Footer";
import ProductDisplay from "../../molecules/ProductDisplay/ProductDisplay";
const MainLayout = () => {
  const TableName = "Default Table Name";
  const TableHeaders = [
    "ID",
    "Name",
    "Description",
    "Price",
    "Quantity",
    "Expirary Date",
    "Image Path",
    "Action",
  ];
  const TableData = [
    {
      id: 1,
      name: "Default Name",
      description: "Default Description",
      price: "0.00",
      quantity: 0,
      expDate: "2024-12-31",
      imagePath: "default.jpg",
    },
    {
      id: 2,
      name: "Apple",
      description: "Ripe banana with potassium",
      price: "0.49",
      quantity: 150,
      expDate: "2024-12-29T00:00:00.000Z",
      imagePath: "apple.jpeg",
    },
    {
      id: 3,
      name: "Chicken Breast",
      description: "Boneless skinless chicken breast",
      price: "4.99",
      quantity: 50,
      expDate: "2024-12-31T00:00:00.000Z",
      imagePath: "chicken.jpg",
    },
    {
      id: 4,
      name: "Baby Onesie",
      description: "Soft cotton onesie for infants",
      price: "12.99",
      quantity: 50,
      expDate: "2024-12-31T00:00:00.000Z",
      imagePath: "onesie.jpg",
    },
    {
      id: 1,
      name: "Default Name",
      description: "Default Description",
      price: "0.00",
      quantity: 0,
      expDate: "2024-12-31",
      imagePath: "default.jpg",
    },
    {
      id: 2,
      name: "Apple",
      description: "Ripe banana with potassium",
      price: "0.49",
      quantity: 150,
      expDate: "2024-12-29T00:00:00.000Z",
      imagePath: "apple.jpeg",
    },
    {
      id: 3,
      name: "Chicken Breast",
      description: "Boneless skinless chicken breast",
      price: "4.99",
      quantity: 50,
      expDate: "2024-12-31T00:00:00.000Z",
      imagePath: "chicken.jpg",
    },
    {
      id: 4,
      name: "Baby Onesie",
      description: "Soft cotton onesie for infants",
      price: "12.99",
      quantity: 50,
      expDate: "2024-12-31T00:00:00.000Z",
      imagePath: "onesie.jpg",
    },
  ];

  return (
    <div className="MainLayout">
      <Navbar />
      <ManageProduct />
      <ProductDisplay
        TableName={"Food Items"}
        TableHeaders={TableHeaders}
        TableData={TableData}
      />
      <Footer />
    </div>
  );
};
export default MainLayout;
