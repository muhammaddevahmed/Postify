

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database, ref, get } from "../Firebase/index";
import PopularPosts from "../assets/Components/homeComponents/PopularPosts";
import SecondBanner from "../assets/Components/homeComponents/SecondBanner";
import "./BlogPage.css";

function BlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const blogRef = ref(database, `blogs/${id}`);
    get(blogRef).then((snapshot) => {
      if (snapshot.exists()) {
        setBlog(snapshot.val());
      }
    });
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="blog-container">
        <article className="blog-post">
          <header className="post-header">
            <div className="post-date">{blog.topic} | {blog.date}</div>
            <h1 className="post-title">{blog.heading}</h1>
          </header>
          <div className="post-image wide-image">
            <img src={blog.image} alt="Blog" />
          </div>
          <p className="light-text">{blog.description}</p>
          <div className="spacer"></div>
          <p className="main-content">{blog.longDescription}</p>
          <blockquote className="styled-quote">
            <p>{blog.quote}</p>
          </blockquote>
          <div className="post-image narrow-image">
            <img src={blog.otherImage} alt="Blog" />
          </div>
          <p className="conclusion-text">{blog.longDescription}</p>
        </article>

        <div className="publisher">
          <h1>Published By : {blog.publisher}</h1>
        </div>
      </div>
      <PopularPosts />
      <SecondBanner />
    </div>
  );
}

export default BlogPage;