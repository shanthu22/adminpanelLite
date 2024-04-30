import "./ManageProduct.css";
import Popup from "../../atoms/Popup/Popup";
import { apiPost, apiPut, apiDelete } from "../../../utils/api/Api";

const ManageProduct = ({ SelectedPrd, HandleInputForm }) => {
  const HandleAddBtn = (e) => {
    e.preventDefault();
    console.log("Add Button Clicked");
    HandleInputForm("AddInputForm");
    const data = {
      name: "CheckImg",
      description: "Ripe banana with potassium",
      price: "0.49",
      quantity: 150,
      expDate: "2024-12-30",
      imagePath: "new.jpg",
    };
    // apiPost("food", data);
  };
  const HandleEditBtn = (e) => {
    HandleInputForm("EditInputForm");
    e.preventDefault();
    console.log("Edit Button Clicked");
    const data = {
      id: 2,
      name: "Salad",
      description: "Ripe banana with potassium",
      price: "0.49",
      quantity: 150,
      expDate: "2024-12-30",
      imagePath: "salad.jpg",
    };
    // apiPut("food", data);
  };

  const HandleDeleteBtn = (e) => {
    e.preventDefault();
    console.log("Delete Button Clicked");
    const data = {
      id: 26,
    };
    apiDelete("food", data);
  };
  return (
    <>
      <Popup>
        {/* <div className="ManageProduct"> */}

        <div>Manage Products</div>
        <div className="ManageProductBtnCollection">
          <button className="ManageProductReloadBtn">Reload</button>
          <button
            className="ManageProductAddBtn"
            onClick={(e) => HandleAddBtn(e)}>
            Add
          </button>
          <button
            className="ManageProductEditBtn"
            onClick={(e) => HandleEditBtn(e)}>
            Edit
          </button>
          <button
            className="ManageProductDeleteBtn"
            onClick={(e) => HandleDeleteBtn(e)}>
            Delete
          </button>
        </div>
      </Popup>
      {/* </div> */}
    </>
  );
};

export default ManageProduct;
