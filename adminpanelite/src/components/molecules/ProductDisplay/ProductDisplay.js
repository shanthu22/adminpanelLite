import "./ProductDisplay.css";
import Container from "../../atoms/Container/Container";
import SampleImg from "../../../assets/example1.jpg";

import { S3ObjectsGet } from "../../../utils/aws/AwsOperations";
import { useEffect, useState } from "react";
import Loader from "../../atoms/Loader/Loader";
const ProductDisplay = ({
  TableName,
  TableHeaders,
  TableData,
  FetchSelectedPrd,
  Reload,
}) => {
  const [imageURLs, setImageURLs] = useState([]);
  const [imgReload, setImgReload] = useState(false);
  const TableLen = TableData.length;
  console.log("TableData Length: ", TableLen);
  const HandleImgReload = () => {
    setImgReload(!imgReload);
  };
  const HandleClick = (prd) => {
    // console.log(prd);
    FetchSelectedPrd(prd);
  };

  const fetchImages = async () => {
    const urls = await Promise.all(
      TableData.map(async (data) => {
        try {
          const imageData = await S3ObjectsGet(data.imagePath);
          // console.log(data.imageData);
          if (imageData) {
            const blob = await new Blob([imageData.Body], {
              type: "image/jpeg",
            });
            const url = URL.createObjectURL(blob);

            return url;
          }
        } catch (error) {
          console.error("Error fetching image:", error);
          return null;
        }
      })
    );
    setImageURLs(urls);
    HandleImgReload();
    if (urls.length === 0) {
      console.log("Image URLS IS EMPTY");
    }
    // setImageURLs(urls);
    // HandleImgReload();
  };
  useEffect(() => {
    console.log("Image FETC IS CALLED");
    fetchImages();
    // setImageURLs([]);
  }, [TableLen]); //TableData  Reload

  return (
    <Container>
      <div className="ProductDisplay">
        <div className="ProductDisplayTableName">{TableName}</div>
        <div className="ProductDisplayTable">
          <table>
            <thead>
              <tr className="ProductDisplayTableHead">
                {TableHeaders.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TableData.map((data, index) => (
                <tr
                  key={index}
                  onClick={() => HandleClick(data)}
                  className="ProductDisplayTableBody">
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.description}</td>
                  <td>{data.price}</td>
                  <td>{data.quantity}</td>
                  <td>{data.expDate}</td>
                  <td>{data.imagePath}</td>
                  <td className="ImageCard">
                    {imageURLs == "default.jpg" ? (
                      <Loader />
                    ) : (
                      <img src={imageURLs[index]} />
                    )}
                  </td>
                  {/* <td>
                    <button onClick={() => HandleClick(data)}>Select </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default ProductDisplay;

//Default Props
ProductDisplay.defaultProps = {
  TableName: "Default Table Name",
  TableHeaders: [
    "ID",
    "Name",
    "Description",
    "Price",
    "Quantity",
    "Expiry Date",
    "Image Path",
    "Image",
    "Action",
  ],
  TableData: [
    {
      id: 0,
      name: "Default Name",
      description: "Default Description",
      price: "0.00",
      quantity: 0,
      expDate: "2024-12-31",
      imagePath: "default.jpg",
    },
  ],
};
