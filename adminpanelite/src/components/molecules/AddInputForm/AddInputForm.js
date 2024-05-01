import Popup from "../../atoms/Popup/Popup";

const AddInputForm = () => {
  return (
    <Popup>
      <div className="EditInputForm">
        <div>Add Product </div>
        <form className="form">
          <label>
            <input
              readOnly
              placeholder="ID"
              value={"id"}
              // type="text"
              className="input"
            />
          </label>
          <label>
            <input
              placeholder="Name"
              value={"name"}
              type="text"
              className="input"
            />
          </label>
          <label>
            <input
              required=""
              placeholder="description"
              value={"description"}
              type="text"
              className="input"
            />
          </label>
          <label>
            <input
              required=""
              placeholder="price"
              value={"price"}
              type="text"
              className="input"
            />
          </label>
          <label>
            <input
              required=""
              placeholder="quantity"
              value={"quantity"}
              type="text"
              className="input"
            />
          </label>
          <label>
            <input
              required=""
              placeholder="expDate"
              value={"expDate"}
              type="text"
              className="input"
            />
          </label>
          <label>
            <input
              required=""
              placeholder="imagePath"
              value={"imagePath"}
              type="text"
              className="input"
            />
          </label>
        </form>
      </div>
    </Popup>
  );
};

export default AddInputForm;
