
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      {/* Left Side - Text */}
      <div className="banner-text">
        <p className="featured">Featured Post</p>
        <h1>
          How <span className="highlight">AI will</span> <br /> Change the Future
        </h1>
        <p className="description12">
          Artificial Intelligence is transforming industries, automating tasks,
          and redefining the way humans interact with technology. As AI advances,
          it brings both opportunities and challenges for society.
        </p>
        <button className="read-more">Read More</button>
      </div>

      {/* Right Side - Image */}
      <div className="banner-image">
        <img src="https://images.unsplash.com/photo-1678491449021-762a7b999862?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AI Future" />
      </div>
    </section>
  );
};

export default Banner;
