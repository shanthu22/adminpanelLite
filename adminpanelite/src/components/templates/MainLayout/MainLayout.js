import React, { useEffect, useState } from "react";
import "./MainLayout.css";
import Navbar from "../../organisms/Navbar/Navbar";
import ManageProduct from "../../pages/ManageProduct/ManageProduct";
import Footer from "../../organisms/Footer/Footer";
import ProductDisplay from "../../molecules/ProductDisplay/ProductDisplay";
import { apiGet } from "../../../utils/api/Api";
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
  const [TableData, setTableData] = useState();

  const FetchData = async (TableName) => {
    const response = await apiGet(TableName);
    console.log(response.data[0]);
    setTableData(response.data[0]);
  };
  useEffect(() => {
    FetchData("food");
  }, [TableData]);
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
