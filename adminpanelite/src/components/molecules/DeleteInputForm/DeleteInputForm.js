import Container from "../../atoms/Container/Container";
import { useState } from "react";
import "./DeleteInputForm.css";
const DeleteInputForm = ({ SelectedPrd, HandleCRUD }) => {
  const [Formdata, setFormdata] = useState(SelectedPrd);
  const HandleOnchange = (e) => {
    e.preventDefault();
    alert("ID is read only, It cannot be Edited ");
    // setFormdata({ ...Formdata, [e.target.name]: e.target.value });
  };
  const HandleOnClick = (e) => {
    alert(
      `${e.target.name} is read only, It cannot be Edited \n Select EDIT Button to Edit`
    );
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    HandleCRUD("Delete", Formdata);
    console.log(Formdata);
  };
  return (
    <Container>
      <div className="DeleteInputForm">
        <div className="FormHeading">Delete Product </div>
        <div className="Image"></div>
        <div className="form">
          <label>
            <div className="deleteText">
              Are you sure you want to delete this product ?
            </div>
          </label>
          <label>
            <input
              readOnly
              placeholder="ID"
              name="id"
              onClick={(e) => HandleOnClick(e)}
              value={Formdata.id}
              // type="text"
              className="input"
            />
          </label>
          <label>
            <input
              readOnly
              placeholder="Name"
              name="name"
              onClick={(e) => HandleOnClick(e)}
              value={Formdata.name}
              // type="text"
              className="input"
            />
          </label>

          <label>
            <button className="DeleteBtn" onClick={(e) => HandleSubmit(e)}>
              Delete
            </button>
            <button className="CancelBtn" onClick={(e) => HandleSubmit(e)}>
              Cancel
            </button>
          </label>
        </div>
      </div>
    </Container>
  );
};

export default DeleteInputForm;
