import { Link } from "react-router-dom";
import "./BlogCards.css";




// App Component with Blog Cards Functionality
const BlogCards = () => {

  // Blog Data Array
  const blogData = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s', // Replace with actual image URLs
      smallHeading: 'Travel | 13 March 2023',
      bigHeading: 'Exploring the Beautiful Beaches of Bali',
      description: 'Bali is a popular destination for beach lovers. In this post, we explore the best beaches in Bali with tips on activities, dining, and accommodation.',
      read:'Read More...'
    },
    {
      image: 'https://via.placeholder.com/400x250',
      smallHeading: 'Travel | 15 March 2023',
      bigHeading: 'A Journey Through the Streets of Paris',
      description: 'Join us as we take a stroll through the beautiful streets of Paris, from iconic landmarks to hidden gems, this blog covers it all.',
      read:'Read More...'

    },
    {
      image: 'https://via.placeholder.com/400x250',
      smallHeading: 'Adventure | 17 March 2023',
      bigHeading: 'Hiking in the Swiss Alps: A Traveler\'s Guide',
      description: 'The Swiss Alps offer some of the most breathtaking hiking trails. Explore the top trails and essential tips for your next hiking adventure.',
      read:'Read More...'
    },
    {
      image: 'https://via.placeholder.com/400x250',
      smallHeading: 'Culture | 18 March 2023',
      bigHeading: 'Cultural Delights in Kyoto: A Must-See Guide',
      description: 'From ancient temples to traditional tea houses, Kyoto offers a glimpse into Japan’s rich cultural heritage. Discover the highlights in this blog.',
      read:'Read More...'
    },
    {
      image: 'https://via.placeholder.com/400x250',
      smallHeading: 'Food | 20 March 2023',
      bigHeading: 'Tasting Authentic Italian Cuisine in Rome',
      description: 'Rome is known for its rich culinary heritage. In this blog, we explore must-try dishes and the best eateries for an authentic Roman experience.',
      read:'Read More...'
    },
    {
      image: 'https://via.placeholder.com/400x250',
      smallHeading: 'Nature | 22 March 2023',
      bigHeading: 'The Stunning National Parks of the USA',
      description: 'Explore the most breathtaking national parks across the USA. From Yosemite to the Grand Canyon, this blog covers the best nature spots to visit.',
      read:'Read More...'
    },
    {
      image: 'https://via.placeholder.com/400x250',
      smallHeading: 'History | 25 March 2023',
      bigHeading: 'Uncovering the Mysteries of Ancient Egypt',
      description: 'Dive deep into the history of Ancient Egypt. This blog highlights the most fascinating archaeological sites and historical discoveries.',
      read:'Read More...'
    },
    {
      image: 'https://via.placeholder.com/400x250',
      smallHeading: 'Adventure | 27 March 2023',
      bigHeading: 'Exploring the Depths: Scuba Diving in the Great Barrier Reef',
      description: 'The Great Barrier Reef is one of the world’s most beautiful underwater ecosystems. Read on for tips and experiences on scuba diving in this marine wonderland.',
      read:'Read More...'
    },
    {
      image: 'https://via.placeholder.com/400x250',
      smallHeading: 'Wildlife | 30 March 2023',
      bigHeading: 'A Safari Adventure in South Africa',
      description: 'Embark on a thrilling safari adventure through South Africa’s most famous national parks. This blog provides an insider’s guide to wildlife sightings.',
      read:'Read More...'
    },
  ];

  return (
    <div>
      <h1 className="page-title">Our Latest Blogs</h1>
      
      {/* Blog Cards Container */}
      <div className="blog-cards-container">
        {blogData.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt="Blog" className="blog-card-image" />
            <div className="blog-card-content">
              <p className="small-heading">{blog.smallHeading}</p>
              <h2 className="big-heading">{blog.bigHeading}</h2>
              <p className="description">{blog.description}</p>
              <Link to="/BlogPage" className="read-more2">{blog.read}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;

