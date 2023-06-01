import { Link } from "react-router-dom";

function Nav({ loggedInUser }) {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/reviews">All reviews</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/users">Users</Link>
      {loggedInUser && (
        <p className="nav-logged-in-user">Welcome, {loggedInUser.username}!</p>
      )}
    </nav>
  );
}

export default Nav;
