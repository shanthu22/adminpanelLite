import "./FileUpload.css";
import imgUpload from "../../../assets/icons/imgUpload.png";
const FileUpload = ({ HandleImageUploadOnSubmit }) => {
  const HandleFileUpload = (e) => {
    const files = e.target.files;

    HandleImageUploadOnSubmit(files);
  };
  return (
    <div className="FileUpload">
      <label className="custum-file-upload" for="file">
        <div className="icon">
          <img className="iconUpload" src={imgUpload} alt="imgUpload" />
        </div>

        <input
          type="file"
          id="file"
          multiple
          onChange={(e) => HandleFileUpload(e)}
        />
      </label>
    </div>
  );
};

export default FileUpload;
