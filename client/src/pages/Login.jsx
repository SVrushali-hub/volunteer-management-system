import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/naye-logo.avif";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {

        localStorage.setItem(
          "isAdmin",
          "true"
        );

        alert("Login Successful");

        navigate("/admin");

      } else {

        alert(data.message);

      }

    } catch (error) {

      console.log(error);

    }
  };

  return (
  <div className="login-page">
    <div className="login-card">

      <img
        src={logo}
        alt="NayePankh Logo"
        className="login-logo"
      />

      <h1>Admin Login</h1>

      <p className="login-subtitle">
        Access the Volunteer Management Dashboard
      </p>

      <form onSubmit={handleLogin}>

        <input
          className="login-input"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          className="login-input"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="login-btn"
          type="submit"
        >
          Login
        </button>

      </form>

    </div>
  </div>
);
}

export default Login;