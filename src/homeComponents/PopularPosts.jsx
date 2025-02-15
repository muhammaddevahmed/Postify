
import "./PopularPosts.css";

const PopularPosts = () => {
  const posts = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s",
      category: "Travel",
      date: "13 March 2023",
      title: "Discovering Hidden Waterfalls",
      description: "Uncover the most breathtaking waterfalls that remain hidden from tourists...",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s",
      category: "Travel",
      date: "13 March 2023",
      title: "A Weekend in Paris",
      description: "Explore the iconic landmarks and hidden spots in the city of love thats good...",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s",
      category: "Travel",
      date: "13 March 2023",
      title: "Best Beaches for Relaxation",
      description: "From the Maldives to the Caribbean, explore the most serene beaches...",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s",
      category: "Travel",
      date: "13 March 2023",
      title: "Mountain Hiking Adventures",
      description: "Conquer new heights and explore thrilling mountain trails...",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s",
      category: "Travel",
      date: "13 March 2023",
      title: "A Guide to Local Street Food",
      description: "Experience the best street food from Asia to South America...",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s",
      category: "Travel",
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
        <button className="view-all-btn">View All</button>
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
