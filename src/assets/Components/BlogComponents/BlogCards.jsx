

import { useEffect, useState } from "react";
import { database, ref, onValue } from  "../../../Firebase";
;
import { Link } from "react-router-dom";
import "./BlogCards.css";

const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogsRef = ref(database, "blogs");
    onValue(blogsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const blogList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setBlogs(blogList);
      }
    });
  }, []);

  return (
    <div>
    
      <div className="blog-cards-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt="Blog" className="blog-card-image" />
            <div className="blog-card-content">
              <p className="small-heading">{blog.topic} | {blog.date}</p>
              <h2 className="big-heading">{blog.heading}</h2>
              <p className="description">{blog.description}</p>
              <p className="publ">Published by:{blog.publisher}</p>
              <Link to={`/Pages/BlogPage/${blog.id}`} className="read-more2">
  Read More...
</Link>



            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;

