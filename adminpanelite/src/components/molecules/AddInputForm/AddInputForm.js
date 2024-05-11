import Popup from "../../atoms/Popup/Popup";
import { useState } from "react";
import "./AddInputForm.css";
import FileUpload from "../../atoms/FileUpload/FileUpload";
const AddInputForm = ({ HandleCRUD }) => {
  const [Formdata, setFormdata] = useState([]);
  const HandleOnchange = (e) => {
    e.preventDefault();
    setFormdata({ ...Formdata, [e.target.name]: e.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(Formdata);
    HandleCRUD("Add", Formdata);
  };
  return (
    <Popup>
      <div className="AddInputForm">
        <div>Add Product </div>

        <div className="Addform">
          <div className="AddFormLeftSide">
            <div className="AddImage">
              <FileUpload />
            </div>
          </div>
          <div className="AddFormRightSide">
            <label>
              <input
                placeholder="Name"
                name="name"
                onChange={(e) => HandleOnchange(e)}
                value={Formdata.name}
                type="text"
                className="input"
              />
            </label>
            <label>
              <input
                required=""
                placeholder="Description"
                name="description"
                onChange={(e) => HandleOnchange(e)}
                value={Formdata.description}
                type="text"
                className="input"
              />
            </label>
            <label>
              <input
                required=""
                placeholder="Price"
                name="price"
                onChange={(e) => HandleOnchange(e)}
                value={Formdata.price}
                type="text"
                className="input"
              />
            </label>
            <label>
              <input
                required=""
                placeholder="Quantity"
                name="quantity"
                onChange={(e) => HandleOnchange(e)}
                value={Formdata.quantity}
                type="text"
                className="input"
              />
            </label>
            <label>
              <input
                required=""
                placeholder="Expiray Date"
                name="expDate"
                onChange={(e) => HandleOnchange(e)}
                value={Formdata.expDate}
                type="text"
                className="input"
              />
            </label>
            <label>
              <input
                required=""
                placeholder="Image Path"
                name="imagePath"
                onChange={(e) => HandleOnchange(e)}
                value={Formdata.imagePath}
                type="text"
                className="input"
              />
            </label>
            <label>
              <button className="submitBtn" onClick={(e) => HandleSubmit(e)}>
                Submit
              </button>
            </label>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default AddInputForm;
