import "./FileUpload.css";
import imgUpload from "../../../assets/icons/imgUpload.png";

const FileUpload = ({ HandleCRUD }) => {
  return (
    <div className="FileUpload">
      <label className="custum-file-upload" for="file">
        <div className="icon">
          <img className="iconUpload" src={imgUpload} alt="imgUpload" />
        </div>

        <input type="file" id="file" />
      </label>
    </div>
  );
};

export default FileUpload;
