import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/login">Login</Link>
        <Link to="/todos">Todo List</Link>
        <Link to="/users">Users</Link>
      </div>
    </nav>
  );
};

export default Navbar;