import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../Firebase/index";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert
import "./Login.css"; // Import CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      // SweetAlert for successful login
      Swal.fire({
        title: "Login Successful!",
        text: "You have been logged in successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/"); // Redirect after login
      });
    } catch (error) {
      // SweetAlert for login error
      Swal.fire({
        title: "Login Failed",
        text: error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="center">
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <p>
            Do not have an account? <Link to="/Pages/Signup">Sign up now</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;