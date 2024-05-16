import Container from "../../atoms/Container/Container";
import { useState } from "react";
import "./AddInputForm.css";
import FileUpload from "../../atoms/FileUpload/FileUpload";

import { S3ObjectsUpload } from "../../../utils/aws/AwsOperations";
const AddInputForm = ({ HandleCRUD }) => {
  const [Formdata, setFormdata] = useState([]);
  const [Imgdata, setImgdata] = useState(null);
  const HandleInputChange = (e) => {
    // e.preventDefault();
    setFormdata({ ...Formdata, [e.target.name]: e.target.value });
  };

  const HandleFileUpload = (files) => {
    const file = files[0];
    const fileformat =
      file.type.split("/")[1] === "jpeg" ? "jpg" : file.type.split("/")[1];

    const originalName = file.name.split(".")[0];
    const newFileName = `Food_${originalName}.${fileformat}`;
    const modifiedFile = new File([file], newFileName, {
      type: file.type,
    });
    setFormdata({ ...Formdata, imagePath: modifiedFile.name });
    setImgdata(modifiedFile);
  };
  const PrepareFileForUpload = async (file) => {
    const reader = new FileReader();

    // Read the file content as an ArrayBuffer
    reader.readAsArrayBuffer(file);

    //trigger for the readAsArrayBuffer, This function will run once the file is read
    reader.onload = async (e) => {
      const fileContent = e.target.result;
      try {
        await S3ObjectsUpload(file.name, fileContent);
        console.log("Upload successful");
      } catch (error) {
        console.error("Upload failed:", error);
      }
    };

    //This functionwil get triggered if there is an error while reading the file
    reader.onerror = (error) => {
      console.error("FileReader error:", error);
    };
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (Imgdata) {
      PrepareFileForUpload(Imgdata);
      console.log(Formdata);
      console.log(Imgdata);
    }
    HandleCRUD("Add", Formdata);
  };

  return (
    <Container>
      <div className="AddInputForm">
        <div className="FormHeading">Add Product </div>

        <div className="Addform">
          <div className="AddFormLeftSide">
            <div className="AddImage">
              {Imgdata ? (
                <img src={URL.createObjectURL(Imgdata)} />
              ) : (
                <FileUpload HandleImageUploadOnSubmit={HandleFileUpload} />
              )}
            </div>
          </div>
          <div className="AddFormRightSide">
            <label>
              <input
                placeholder="Name"
                name="name"
                onChange={(e) => HandleInputChange(e)}
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
                onChange={(e) => HandleInputChange(e)}
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
                onChange={(e) => HandleInputChange(e)}
                value={Formdata.price}
                type="number"
                className="input"
              />
            </label>
            <label>
              <input
                required=""
                placeholder="Quantity"
                name="quantity"
                onChange={(e) => HandleInputChange(e)}
                value={Formdata.quantity}
                type="number"
                className="input"
              />
            </label>
            <label>
              <input
                required=""
                placeholder="Expiray Date"
                name="expDate"
                onChange={(e) => HandleInputChange(e)}
                value={Formdata.expDate}
                type="date"
                className="input"
              />
            </label>
            <label>
              <input
                readOnly
                required=""
                placeholder="Image Path"
                name="imagePath"
                // onChange={(e) => HandleInputChange(e)}
                value={Imgdata?.name}
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
    </Container>
  );
};

export default AddInputForm;
