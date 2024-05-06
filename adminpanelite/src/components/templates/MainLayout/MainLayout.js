import React, { useEffect, useState } from "react";
import "./MainLayout.css";
import Navbar from "../../organisms/Navbar/Navbar";
import ManageProduct from "../../pages/ManageProduct/ManageProduct";
import Footer from "../../organisms/Footer/Footer";
import ProductDisplay from "../../molecules/ProductDisplay/ProductDisplay";
import { apiGet, apiPost, apiPut, apiDelete } from "../../../utils/api/Api";
import AddInputForm from "../../molecules/AddInputForm/AddInputForm";
import EditInputForm from "../../molecules/EditInputForm/EditInputForm";
import DeleteInputForm from "../../molecules/DeleteInputForm/DeleteInputForm";

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
  const [ShowDeleteInputForm, setShowDeleteInputForm] = useState(false);
  const [Reload, setReload] = useState(false);
  const HandleDataReload = () => {
    setReload((Reload) => !Reload);
  };
  const HandleInputForm = (name) => {
    if (name == "AddInputForm") {
      setShowAddInputForm((ShowAddInputForm) => !ShowAddInputForm);
      setShowEditInputForm(false);
      setShowDeleteInputForm(false);
    } else if (name == "EditInputForm") {
      setShowEditInputForm((ShowEditInputForm) => !ShowEditInputForm);
      setShowAddInputForm(false);
      setShowDeleteInputForm(false);
    } else if (name == "DeleteInputForm") {
      setShowDeleteInputForm(
        (setShowDeleteInputForm) => !setShowDeleteInputForm
      );
      setShowAddInputForm(false);
      setShowEditInputForm(false);
    }
  };

  const HandleCRUD = async (action, data) => {
    if (action == "Add") {
      await apiPost("food", data);
      HandleInputForm("AddInputForm");
      console.log(Reload);
      HandleDataReload();
    } else if (action == "Edit") {
      await apiPut("food", data);
      HandleInputForm("EditInputForm");
      HandleDataReload();
    } else if (action == "Delete") {
      await apiDelete("food", data);
      HandleInputForm("DeleteInputForm");
      //setShowDeleteInputForm(false);
      HandleDataReload();
    } else {
      alert("select proper option");
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
  }, [Reload]); //TableData    Reload
  return (
    <div className="MainLayout">
      <Navbar />
      <ManageProduct
        SelectedPrd={SelectedPrd}
        HandleInputForm={HandleInputForm}
        HandleDataReload={HandleDataReload}
      />
      {ShowAddInputForm && <AddInputForm HandleCRUD={HandleCRUD} />}
      {ShowEditInputForm && SelectedPrd && (
        <EditInputForm SelectedPrd={SelectedPrd} HandleCRUD={HandleCRUD} />
      )}
      {ShowDeleteInputForm && SelectedPrd && (
        <DeleteInputForm SelectedPrd={SelectedPrd} HandleCRUD={HandleCRUD} />
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
