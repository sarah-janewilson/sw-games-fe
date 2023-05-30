import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/reviews">All reviews</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  );
}

export default Nav;
