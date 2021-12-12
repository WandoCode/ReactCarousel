import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/pic">Pictures</Link>
      <Link to="/add-picture">Add a picture</Link>
    </nav>
  );
}

export default Navbar;
