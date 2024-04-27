import "./ManageProduct.css";
const ManageProduct = () => {
  return (
    <div className="ManageProduct">
      <div>Manage Products</div>
      <div className="ManageProductBtnCollection">
        <button className="ManageProductBtn">Reload</button>
        <button className="ManageProductBtn">Add</button>
        <button className="ManageProductBtn">Edit </button>
        <button className="ManageProductBtn">Delete </button>
      </div>
    </div>
  );
};

export default ManageProduct;
