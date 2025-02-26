import { useState } from "react";
import { auth, database, createUserWithEmailAndPassword, ref, set } from "../Firebase/index";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert
import "./Signup.css"; // Import the updated CSS

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    phone: "",
    country: "",
    city: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        title: "Error",
        text: "Passwords do not match!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Save extra details to Firebase
      await set(ref(database, "users/" + user.uid), {
        name: formData.name,
        email: formData.email,
        gender: formData.gender,
        phone: formData.phone,
        country: formData.country,
        city: formData.city,
      });

      // SweetAlert for successful signup
      Swal.fire({
        title: "Signup Successful!",
        text: "Your account has been created successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/Pages/Login"); // Redirect to login page
      });
    } catch (error) {
      // SweetAlert for signup error
      Swal.fire({
        title: "Signup Failed",
        text: error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="center">
      <div className="signup-container1">
        <div className="signup-card">
          <h2>Create Your Account</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
            
            <select name="gender" onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
            <input type="text" name="country" placeholder="Country" onChange={handleChange} required />
            <input type="text" name="city" placeholder="City" onChange={handleChange} required />

            <button type="submit">Register Now</button>
            
            <p>Already have an account? <Link to="/Pages/Login">Login now</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;