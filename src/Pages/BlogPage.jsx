import PopularPosts from "../assets/Components/homeComponents/PopularPosts";
import SecondBanner from "../assets/Components/homeComponents/SecondBanner";
import "./BlogPage.css";

function BlogPage() {
  return (
    <div>
    <div className="blog-container">
      <article className="blog-post">
        {/* Post Header */}
        <header className="post-header">
          <div className="post-date">Development - 23 March 2023</div>
          <h1 className="post-title">
            The Evolution of Modern Web Development Practices and Their Impact on Digital Innovation
          </h1>
        </header>

        {/* Main Image */}
        <div className="post-image wide-image">
          <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
               alt="Web Development Concepts" />
        </div>

        {/* Lightweight Text */}
        <p className="light-text">
          In the rapidly changing landscape of digital technology, web development has emerged as a cornerstone of modern business strategy. The transition from static pages to dynamic applications has revolutionized how we interact with the digital world.
        </p>

        {/* Spacer */}
        <div className="spacer"></div>

        {/* Main Content */}
        <p className="main-content">
          The journey began with basic HTML pages in the early 90s, evolving through CSS integration and JavaScript revolution. Today is frameworks like React and Vue.js enable complex applications, while backend technologies power real-time data processing. The rise of mobile-first design and progressive web apps has further blurred lines between native and web experiences.
        </p>

        {/* Quote Section */}
        <blockquote className="styled-quote">
          <p>Web development is not just about coding - it is about creating digital experiences that resonate with users across devices and platforms.</p>
          <cite>- Senior Web Architect, Tech Innovations</cite>
        </blockquote>

        {/* Secondary Content */}
        <p className="main-content">
          Modern development practices emphasize component-based architecture, continuous integration, and cloud deployment. The adoption of AI-driven tools for code optimization and automated testing has significantly reduced development cycles while improving code quality. Security considerations now play a pivotal role in every development phase.
        </p>

        {/* Narrow Image */}
        <div className="post-image narrow-image">
          <img src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
               alt="Coding Process" />
        </div>

        {/* Final Text */}
        <p className="conclusion-text">
          As we look to the future, emerging technologies like WebAssembly and decentralized web applications promise to push boundaries further. The focus remains on creating scalable, maintainable solutions that adapt to evolving user needs.
        </p>
      </article>
    </div>
    <PopularPosts/>
    <SecondBanner/>
    </div>
  );
}

export default BlogPage;