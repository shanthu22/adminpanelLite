import "./ProductDisplay.css";
import Popup from "../../atoms/Popup/Popup";
const ProductDisplay = ({ TableName, TableHeaders, TableData }) => {
  return (
    <>
      <Popup>
        <div className="ProductDisplay">
          <div className="ProductDisplayTableName">{TableName}</div>
          <div className="ProductDisplayTable">
            <table>
              <thead>
                <tr className="ProductDisplayTableHead">
                  {TableHeaders.map((header) => {
                    return <th>{header}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {TableData.map((data) => {
                  return (
                    <tr className="ProductDisplayTableBody">
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.description}</td>
                      <td>{data.price}</td>
                      <td>{data.quantity}</td>
                      <td>{data.expDate}</td>
                      <td>{data.imagePath}</td>
                      <td>
                        <button>Select </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Popup>
    </>
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
    "Expirary Date",
    "Image Path",
    "Action",
  ],
  TableData: [
    {
      id: 1,
      name: "Default Name",
      description: "Default Description",
      price: "0.00",
      quantity: 0,
      expDate: "2024-12-31",
      imagePath: "default.jpg",
    },
    {
      id: 2,
      name: "Apple",
      description: "Ripe banana with potassium",
      price: "0.49",
      quantity: 150,
      expDate: "2024-12-29",
      imagePath: "apple.jpeg",
    },
    {
      id: 3,
      name: "Chicken Breast",
      description: "Boneless skinless chicken breast",
      price: "4.99",
      quantity: 50,
      expDate: "2024-12-31",
      imagePath: "chicken.jpg",
    },
    {
      id: 4,
      name: "Baby Onesie",
      description: "Soft cotton onesie for infants",
      price: "12.99",
      quantity: 50,
      expDate: "2024-12-31",
      imagePath: "onesie.jpg",
    },
  ],
};
