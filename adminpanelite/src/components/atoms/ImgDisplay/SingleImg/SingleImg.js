import "./FileUpload.css";
import imgUpload from "../../../assets/icons/imgUpload.png";
const SingleImg = ({ HandleImageUploadOnSubmit }) => {
  const HandleFileUpload = (e) => {
    const files = e.target.files;
    if (files.length > 1) {
      alert("Multiple file loaded ");
    }
    HandleImageUploadOnSubmit(files);
  };
  return (
    <div className="FileUpload">
      <label className="custum-file-upload" multiple for="file">
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

export default SingleImg;
