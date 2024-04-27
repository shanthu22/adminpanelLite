import "./ProductDisplay.css";
import Popup from "../../atoms/Popup/Popup";
const ProductDisplay = () => {
  const TableName = "Food Items";
  const TableHeaders = [
    "ID",
    "Name",
    "Description",
    "Price",
    "Quantity",
    "Expirary Date",
    "Image Path",
    "Action",
  ];
  const TableData = [
    {
      id: 2,
      name: "Apple",
      description: "Ripe banana with potassium",
      price: "0.49",
      quantity: 150,
      expDate: "2024-12-29T00:00:00.000Z",
      imagePath: "apple.jpeg",
    },
    {
      id: 3,
      name: "Chicken Breast",
      description: "Boneless skinless chicken breast",
      price: "4.99",
      quantity: 50,
      expDate: "2024-12-31T00:00:00.000Z",
      imagePath: "chicken.jpg",
    },
    {
      id: 4,
      name: "Baby Onesie",
      description: "Soft cotton onesie for infants",
      price: "12.99",
      quantity: 50,
      expDate: "2024-12-31T00:00:00.000Z",
      imagePath: "onesie.jpg",
    },
  ];

  return (
    <>
      <Popup>
        <div className="ProductDisplay">
          <div className="ProductDisplayTableName">{TableName}</div>
          <div className="ProductDisplayTable">
            <table>
              <thead>
                <tr>
                  {TableHeaders.map((header) => {
                    return <th>{header}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {TableData.map((data) => {
                  return (
                    <tr>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.description}</td>
                      <td>{data.price}</td>
                      <td>{data.quantity}</td>
                      <td>{data.expDate}</td>
                      <td>{data.imagePath}</td>
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
