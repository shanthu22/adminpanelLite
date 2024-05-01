import React, { useEffect, useState } from "react";
import "./MainLayout.css";
import Navbar from "../../organisms/Navbar/Navbar";
import ManageProduct from "../../pages/ManageProduct/ManageProduct";
import Footer from "../../organisms/Footer/Footer";
import ProductDisplay from "../../molecules/ProductDisplay/ProductDisplay";
import { apiGet } from "../../../utils/api/Api";
import AddInputForm from "../../molecules/AddInputForm/AddInputForm";
import EditInputForm from "../../molecules/EditInputForm/EditInputForm";
// import { S3ObjectsGet } from "../../../utils/aws/Aws";
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
    "Image",
    "Action",
  ];
  const [TableData, setTableData] = useState();
  const [SelectedPrd, setSelectedPrd] = useState();
  const [ShowAddInputForm, setShowAddInputForm] = useState(false);
  const [ShowEditInputForm, setShowEditInputForm] = useState(false);

  const HandleInputForm = (name) => {
    if (name == "AddInputForm") {
      setShowAddInputForm((ShowAddInputForm) => !ShowAddInputForm);
      setShowEditInputForm(false);
      //alert(ShowAddInputForm);
    } else if (name == "EditInputForm") {
      setShowEditInputForm((ShowEditInputForm) => !ShowEditInputForm);
      setShowAddInputForm(false);
      //alert(ShowEditInputForm);
    }
  };

  const FetchData = async (TableName) => {
    const response = await apiGet(TableName);
    //console.log(response.data[0]);
    setTableData(response.data[0]);
  };
  const FetchSelectedPrd = (prd) => {
    console.log(prd);
    setSelectedPrd(prd);
  };
  useEffect(() => {
    FetchData("food");
  }, [TableData]);
  return (
    <div className="MainLayout">
      <Navbar />
      <ManageProduct
        SelectedPrd={SelectedPrd}
        HandleInputForm={HandleInputForm}
      />
      {ShowAddInputForm && <AddInputForm />}
      {ShowEditInputForm && <EditInputForm SelectedPrd={SelectedPrd} />}
      <ProductDisplay
        TableName={"Food Items"}
        TableHeaders={TableHeaders}
        TableData={TableData}
        FetchSelectedPrd={FetchSelectedPrd}
      />
      <Footer />
    </div>
  );
};
export default MainLayout;
