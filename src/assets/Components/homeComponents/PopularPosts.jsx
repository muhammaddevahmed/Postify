
import "./PopularPosts.css";
import { Link } from "react-router-dom";

const PopularPosts = () => {
  const posts = [
    {
      img: "https://images.unsplash.com/photo-1601999007938-f584b47324ac?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Travel",
      date: "13 March 2023",
      title: "Discovering Hidden Waterfalls",
      description: "Uncover the most breathtaking waterfalls that remain hidden from tourists...",
    },
    {
      img: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Development",
      date: "13 March 2023",
      title: "A Weekend in Paris",
      description: "Explore the iconic landmarks and hidden spots in the city of love thats good...",
    },
    {
      img: "https://images.unsplash.com/photo-1548354797-6b1c0d36b3af?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Sports",
      date: "13 March 2023",
      title: "Best Beaches for Relaxation",
      description: "From the Maldives to the Caribbean, explore the most serene beaches...",
    },
    {
      img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Travel",
      date: "13 March 2023",
      title: "Mountain Hiking Adventures",
      description: "Conquer new heights and explore thrilling mountain trails...",
    },
    {
      img: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Development",
      date: "13 March 2023",
      title: "A Guide to Local Street Food",
      description: "Experience the best street food from Asia to South America...",
    },
    {
      img: "https://images.ctfassets.net/xct4vv2g1nhc/5V3Owsf7ZZMqAjOaqgUByP/ae1393914a8b05d47bb677afcdf38fc3/youth-sports-blog-feature.png?w=3840&q=75&fm=webp",
      category: "Sports",
      date: "13 March 2023",
      title: "The Ultimate Road Trip Guide",
      description: "Plan the perfect road trip with these must-visit locations...",
    },
  ];

  return (
    <div className="popular-posts">
      {/* Header Section */}
      <div className="popular-posts-header">
        <h2>Popular Post</h2>
        <Link to={`/Pages/Blog`}>
  <button className="view-all-btn">View All</button>
</Link>
      </div>

      {/* Post Cards */}
      <div className="popular-posts-grid">
        {posts.map((post, index) => (
          <div key={index} className="popular-post-card">
            <img src={post.img} alt={post.title} className="popular-image" />
            <p className="post-date">{post.category} • {post.date}</p>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-description">{post.description}</p>
            <p className="read-more1">Read more...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
