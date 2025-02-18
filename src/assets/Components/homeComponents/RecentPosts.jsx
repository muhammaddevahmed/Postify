
import "./RecentPosts.css";

const RecentPosts = () => {
  return (
    <div className="recent-posts">
      {/* Header Section */}
      <div className="recent-posts-header">
        <h2>Our Recent Post</h2>
        <button className="view-all-btn">View All</button>
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

      {/* Second Row: Three Smaller Posts */}
      <div className="small-posts">
        {[
          {
            img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Travel",
            date: "13 March 2023",
            title: "Exploring the Hidden Gems of Bali",
            description: "Discover Bali's most stunning and undiscovered places that you must visit...",
          },
          {
            img: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Development",
            date: "13 March 2023",
            title: "A Journey Through the Alps",
            description: "Experience breathtaking landscapes and scenic routes through the European Alps...",
          },
          {
            img: "https://images.unsplash.com/photo-1552318965-6e6be7484ada?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Sports",
            date: "13 March 2023",
            title: "The Best Street Food Around the World",
            description: "From Bangkok to Mexico City, explore the best street food spots loved by travelers...",
          },
        ].map((post, index) => (
          <div key={index} className="small-post">
            <img src={post.img} alt={post.title} className="small-image" />
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

export default RecentPosts;
