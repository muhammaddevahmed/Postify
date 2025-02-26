

import { useEffect, useState } from "react";
import { auth, database } from "../Firebase/index";
import { ref, get, push } from "firebase/database";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Profile.css";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogData, setBlogData] = useState({
    topic: "",
    date: "",
    heading: "",
    image: "",
    description: "",
    quote: "",
    otherImage: "",
    longDescription: "",
    publisher: "", // Added publisher field
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userRef = ref(database, `users/${auth.currentUser.uid}`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          setUserData(snapshot.val());
        }
      } else {
        Swal.fire({
          title: "Login Required",
          text: "Please login to view your profile.",
          icon: "warning",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/Pages/Login");
        });
      }
    };
    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff4d6d",
      cancelButtonColor: "#333",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        auth.signOut().then(() => {
          Swal.fire({
            title: "Logged Out!",
            text: "You have been successfully logged out.",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            navigate("/");
          });
        });
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleCreateBlog = async () => {
    if (
      !blogData.topic ||
      !blogData.date ||
      !blogData.heading ||
      !blogData.image ||
      !blogData.description ||
      !blogData.quote ||
      !blogData.otherImage ||
      !blogData.longDescription ||
      !blogData.publisher // Ensure publisher is not empty
    ) {
      Swal.fire({
        title: "Error",
        text: "Please fill all the fields.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const blogRef = ref(database, "blogs");
    await push(blogRef, blogData);

    Swal.fire({
      title: "Success",
      text: "Blog created successfully!",
      icon: "success",
      confirmButtonText: "OK",
    });

    setIsModalOpen(false);
    setBlogData({
      topic: "",
      date: "",
      heading: "",
      image: "",
      description: "",
      quote: "",
      otherImage: "",
      longDescription: "",
      publisher: "", // Reset publisher field
    });
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Profile Details</h2>
        {userData ? (
          <div className="profile-info">
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Gender:</strong> {userData.gender}</p>
            <p><strong>Phone:</strong> {userData.phone}</p>
            <p><strong>Country:</strong> {userData.country}</p>
            <p><strong>City:</strong> {userData.city}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </aside>

      <main className="content">
        <h1>Welcome to Your Profile</h1>
        <button className="create-blog-btn" onClick={() => setIsModalOpen(true)}>Create a Blog</button>
      </main>

      {/* Blog Creation Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Create a New Blog</h2>
            <input
              type="text"
              name="topic"
              placeholder="Blog Topic"
              value={blogData.topic}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="date"
              value={blogData.date}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="heading"
              placeholder="Blog Heading"
              value={blogData.heading}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={blogData.image}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              placeholder="Short Description"
              value={blogData.description}
              onChange={handleInputChange}
            />
            <textarea
              name="longDescription"
              placeholder="Long Description"
              value={blogData.longDescription}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="quote"
              placeholder="Quote"
              value={blogData.quote}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="otherImage"
              placeholder="Other Image URL"
              value={blogData.otherImage}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="publisher"
              placeholder="Publisher Name"
              value={blogData.publisher}
              onChange={handleInputChange}
            />
            <button onClick={handleCreateBlog}>Create Blog</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
