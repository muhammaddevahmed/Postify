import { useEffect, useState } from "react";
import { auth, database } from "../Firebase/index";
import { ref, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userRef = ref(database, `users/${auth.currentUser.uid}`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          setUserData(snapshot.val());
        }
      }
    };
    fetchUserData();
  }, []);

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
      </aside>

      <main className="content">
        <h1>Welcome to Your Profile</h1>
        <button onClick={() => navigate("/create-blog")}>Create a Blog</button>
      </main>
    </div>
  );
};

export default Profile;
