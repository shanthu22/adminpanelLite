import { useState } from "react";
import Popup from "../../atoms/Popup/Popup";
import "./EditInputForm.css";
const EditInputForm = ({ SelectedPrd }) => {
  const { id, name, description, price, quantity, expDate, imagePath } =
    SelectedPrd;
  // console.log(SelectedPrd.id);
  const [Formdata, setFormdata] = useState(SelectedPrd);
  const HandleOnchange = (e) => {
    e.preventDefault();
    setFormdata({ ...Formdata, [e.target.name]: e.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(Formdata);
  };
  return (
    <Popup>
      <div className="EditInputForm">
        <div>Edit Product </div>
        <div className="Image"></div>
        <div className="form">
          <label>
            <input
              readOnly
              placeholder="ID"
              name="id"
              onClick={(e) => alert("ID is read only, It cannot be Edited ")}
              value={Formdata.id}
              // type="text"
              className="input"
            />
          </label>
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
              placeholder="description"
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
              placeholder="price"
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
              placeholder="quantity"
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
              placeholder="expDate"
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
              placeholder="imagePath"
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
    </Popup>
  );
};
export default EditInputForm;
