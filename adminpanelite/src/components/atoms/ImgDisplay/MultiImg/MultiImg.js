import "./MultiImg.css";
// import imgUpload from "../../../assets/icons/imgUpload.png";
const MultiImg = ({ images }) => {
  console.log(images);
  //   alert(images.length());
  const HandleimgClick = (e) => {
    e.preventDefault();
    alert("An image has been clicked");
  };
  const handleCloseBtn = (e) => {
    e.preventDefault();
    alert("Close button has been clicked");
  };
  return (
    <div className="multiImg">
      {images.map((img, index) => (
        <div>
          <button className="deleteBtn" onClick={(e) => handleCloseBtn(e)}>
            X
          </button>
          <img
            onClick={(e) => HandleimgClick(e)}
            className="imgContainer"
            src={URL.createObjectURL(img)}
            alt="imgUpload"
          />
        </div>
      ))}
    </div>
  );
};

export default MultiImg;
