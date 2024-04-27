import "./ManageProduct.css";
import Popup from "../../atoms/Popup/Popup";
const ManageProduct = () => {
  return (
    <>
      <Popup>
        {/* <div className="ManageProduct"> */}
        <div>Manage Products</div>
        <div className="ManageProductBtnCollection">
          <button className="ManageProductBtn">Reload</button>
          <button className="ManageProductBtn">Add</button>
          <button className="ManageProductBtn">Edit </button>
          <button className="ManageProductBtn">Delete </button>
        </div>
      </Popup>
      {/* </div> */}
    </>
  );
};

export default ManageProduct;
