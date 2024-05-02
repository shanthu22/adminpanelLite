import React, { useEffect, useState } from "react";
import "./MainLayout.css";
import Navbar from "../../organisms/Navbar/Navbar";
import ManageProduct from "../../pages/ManageProduct/ManageProduct";
import Footer from "../../organisms/Footer/Footer";
import ProductDisplay from "../../molecules/ProductDisplay/ProductDisplay";
import { apiGet, apiPost, apiPut, apiDelete } from "../../../utils/api/Api";
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
  const HandleCRUD = (action, data) => {
    //e.preventDefault();
    console.log(action);
    console.log(data);
    if (action == "Add") {
      console.log("ADDDD IS CALLED");
      apiPost("food", data);
    } else if (action == "Edit") {
      console.log("EDIT IS CALLED");
      apiPut("food", data);
    } else if (action == "Delete") {
      apiDelete("food", data);
    } else {
      alert("select proper option");
    }
  };
  const HandleInputForm = (name) => {
    if (name == "AddInputForm") {
      setShowAddInputForm((ShowAddInputForm) => !ShowAddInputForm);
      setShowEditInputForm(false);
    } else if (name == "EditInputForm") {
      setShowEditInputForm((ShowEditInputForm) => !ShowEditInputForm);
      setShowAddInputForm(false);
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
      {ShowAddInputForm && <AddInputForm HandleCRUD={HandleCRUD} />}
      {ShowEditInputForm && (
        <EditInputForm SelectedPrd={SelectedPrd} HandleCRUD={HandleCRUD} />
      )}
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
