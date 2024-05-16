import "./Sidebar.css";
import Container from "../../atoms/Container/Container";
const Sidebar = () => {
  return (
    <Container>
      <div className="Sidebar">
        <div>Food</div>
        <div>Cloth</div>
        <div>Toys</div>
      </div>
    </Container>
  );
};

export default Sidebar;
