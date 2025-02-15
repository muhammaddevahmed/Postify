
import "./FeaturedCard.css";

const OverlappingCard = () => {
  return (
    <div className="overlapping-card-container">
      <div className="image-card">
        {/* Replace with your image URL */}
        <img 
          src="https://static.vecteezy.com/system/resources/thumbnails/023/030/611/small_2x/artificial-intelligence-ai-business-people-showing-future-technology-photo.jpg" 
          alt="Development" 
          className="image" 
        />
        <div className="info-card">
          <p className="date">Development • 16 March 2023</p>
          <h2 className="title">AI is Impact on the Future</h2>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quis deleniti vel cupiditate nisi, accusamus laborum ratione nesciunt culpa porro, provident quos exercitationem animi. Veniam a illo voluptatem, doloribus temporibus animi nemo incidunt iste eaque quisquam nam libero atque ex.
          </p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default OverlappingCard;
