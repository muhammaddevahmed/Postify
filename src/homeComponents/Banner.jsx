
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
        <p className="description">
          Artificial Intelligence is transforming industries, automating tasks,
          and redefining the way humans interact with technology. As AI advances,
          it brings both opportunities and challenges for society.
        </p>
        <button className="read-more">Read More</button>
      </div>

      {/* Right Side - Image */}
      <div className="banner-image">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/023/030/611/small_2x/artificial-intelligence-ai-business-people-showing-future-technology-photo.jpg" alt="AI Future" />
      </div>
    </section>
  );
};

export default Banner;
