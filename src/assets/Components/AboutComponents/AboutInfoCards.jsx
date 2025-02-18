import  { useState } from 'react';
import './AboutInfoCards.css'; // Import the CSS file

const AboutInfoCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardNumber) => {
    setHoveredCard(cardNumber);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="card-container">
      {['Brainstorming', 'Analysis', 'News Publishing'].map((title, index) => (
        <div
          key={index}
          className="card"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
            boxShadow:
              hoveredCard === index
                ? '0 8px 16px rgba(0, 0, 0, 0.2)'
                : '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: hoveredCard === index ? '#7C4EE4' : '#fff',
          }}
        >
          <div className="card-body">
            <h2 className="card-title">{`0${index + 1}`}</h2>
            <h6 className="card-subtitle">{title}</h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae massa. Donec eleifend, libero at auctor ullamcorper, nisl arcu euismod ligula, eu tincidunt nunc odio eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu.
            </p>
            <a
              href="#learn-more"
              className={`card-link ${hoveredCard === index ? 'card-link-hover' : ''}`}
            >
              Learn More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutInfoCards;
