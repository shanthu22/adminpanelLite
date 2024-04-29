import "./ManageProduct.css";
import Popup from "../../atoms/Popup/Popup";
import { apiPost, apiPut, apiDelete } from "../../../utils/api/Api";
const ManageProduct = () => {
  const HandleAddBtn = (e) => {
    e.preventDefault();
    console.log("Add Button Clicked");
    const data = {
      name: "NewData",
      description: "Ripe banana with potassium",
      price: "0.49",
      quantity: 150,
      expDate: "2024-12-30",
      photoUrl: "new.jpg",
    };
    apiPost("food", data);
  };
  const HandleEditBtn = (e) => {
    e.preventDefault();
    console.log("Edit Button Clicked");
    const data = {
      id: 2,
      name: "Salad",
      description: "Ripe banana with potassium",
      price: "0.49",
      quantity: 150,
      expDate: "2024-12-30",
      photoUrl: "new.jpg",
    };
    apiPut("food", data);
  };

  const HandleDeleteBtn = (e) => {
    e.preventDefault();
    console.log("Delete Button Clicked");
    const data = {
      id: 7,
    };
    apiDelete("food", data);
  };
  return (
    <>
      <Popup>
        {/* <div className="ManageProduct"> */}
        <div>Manage Products</div>
        <div className="ManageProductBtnCollection">
          <button className="ManageProductBtn">Reload</button>
          <button className="ManageProductBtn" onClick={(e) => HandleAddBtn(e)}>
            Add
          </button>
          <button
            className="ManageProductBtn"
            onClick={(e) => HandleEditBtn(e)}>
            Edit
          </button>
          <button
            className="ManageProductBtn"
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
