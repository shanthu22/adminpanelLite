import "./FileUpload.css";
import imgUpload from "../../../assets/icons/imgUpload.png";

const FileUpload = ({ HandleCRUD }) => {
  const HandleFileUpload = (e) => {
    const file = e.target.files;
    let fileformat = "png";
    let NewFileName = `new222FileName.${fileformat}`;
    let ModifiedFile = new File([file[0]], NewFileName, { type: file[0].type });
    console.log(ModifiedFile);
    console.log(file[0]);
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
