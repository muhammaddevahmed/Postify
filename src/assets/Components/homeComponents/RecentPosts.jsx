
import "./RecentPosts.css";
import BlogCards from "../../../assets/Components/BlogComponents/BlogCards";
import { Link } from "react-router-dom";

const RecentPosts = () => {
  return (
    <div className="recent-posts">
      {/* Header Section */}
      <div className="recent-posts-header">
        <h2>Our Recent Post</h2>
        <Link to={`/Pages/Blog`}>
  <button className="view-all-btn">View All</button>
</Link>

      </div>

      {/* First Row: Large Post */}
      <div className="large-post">
        <img 
          src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Development" 
          className="large-image" 
        />
        <div className="large-post-content">
          <p className="post-date">Development • 1 March 2023</p>
          <h3 className="post-title">How AI is Transforming Industries</h3>
          <p className="post-description">
            AI is revolutionizing businesses by automating tasks, enhancing decision-making, 
            and improving efficiency. It’s reshaping the way industries operate.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
      <BlogCards />
      
    </div>
    
  );
 
};

export default RecentPosts;
