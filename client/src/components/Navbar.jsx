import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/naye-logo.avif";
function Navbar() {
  const navigate = useNavigate();

  const isAdmin = localStorage.getItem("isAdmin");

  const logout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
  <img
    src={logo}
    alt="NayePankh Logo"
    className="logo"
  />

  <h2>NayePankh</h2>
</div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {!isAdmin && (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Admin Login</Link>
          </>
        )}

        {isAdmin && (
          <>
            <Link to="/admin">Dashboard</Link>
            <Link to="/reports">Reports</Link>
            

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;