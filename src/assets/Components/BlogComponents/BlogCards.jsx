// import { Link } from "react-router-dom";
// import "./BlogCards.css";





// const BlogCards = () => {

  
//   const blogData = [
//     {
//       image: 'https://images.unsplash.com/photo-1601999007938-f584b47324ac?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URLs
//       smallHeading: 'Travel | 13 March 2023',
//       bigHeading: 'Exploring the Beautiful Beaches of Bali',
//       description: 'Bali is a popular destination for beach lovers. In this post, we explore the best beaches in Bali with tips on activities, dining, and accommodation.',
//       read:'Read More...'
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       smallHeading: 'Travel | 15 March 2023',
//       bigHeading: 'A Journey Through the Streets of Paris',
//       description: 'Join us as we take a stroll through the beautiful streets of Paris, from iconic landmarks to hidden gems, this blog covers it all.',
//       read:'Read More...'

//     },
//     {
//       image: 'https://images.unsplash.com/photo-1548354797-6b1c0d36b3af?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       smallHeading: 'Adventure | 17 March 2023',
//       bigHeading: 'Hiking in the Swiss Alps: A Traveler\'s Guide',
//       description: 'The Swiss Alps offer some of the most breathtaking hiking trails. Explore the top trails and essential tips for your next hiking adventure.',
//       read:'Read More...'
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       smallHeading: 'Culture | 18 March 2023',
//       bigHeading: 'Cultural Delights in Kyoto: A Must-See Guide',
//       description: 'From ancient temples to traditional tea houses, Kyoto offers a glimpse into Japan’s rich cultural heritage. Discover the highlights in this blog.',
//       read:'Read More...'
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       smallHeading: 'Food | 20 March 2023',
//       bigHeading: 'Tasting Authentic Italian Cuisine in Rome',
//       description: 'Rome is known for its rich culinary heritage. In this blog, we explore must-try dishes and the best eateries for an authentic Roman experience.',
//       read:'Read More...'
//     },
//     {
//       image: 'https://images.ctfassets.net/xct4vv2g1nhc/5V3Owsf7ZZMqAjOaqgUByP/ae1393914a8b05d47bb677afcdf38fc3/youth-sports-blog-feature.png?w=3840&q=75&fm=webp',
//       smallHeading: 'Nature | 22 March 2023',
//       bigHeading: 'The Stunning National Parks of the USA',
//       description: 'Explore the most breathtaking national parks across the USA. From Yosemite to the Grand Canyon, this blog covers the best nature spots to visit.',
//       read:'Read More...'
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       smallHeading: 'History | 25 March 2023',
//       bigHeading: 'Uncovering the Mysteries of Ancient Egypt',
//       description: 'Dive deep into the history of Ancient Egypt. This blog highlights the most fascinating archaeological sites and historical discoveries.',
//       read:'Read More...'
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       smallHeading: 'Adventure | 27 March 2023',
//       bigHeading: 'Exploring the Depths: Scuba Diving in the Great Barrier Reef',
//       description: 'The Great Barrier Reef is one of the world’s most beautiful underwater ecosystems. Read on for tips and experiences on scuba diving in this marine wonderland.',
//       read:'Read More...'
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1552318965-6e6be7484ada?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       smallHeading: 'Wildlife | 30 March 2023',
//       bigHeading: 'A Safari Adventure in South Africa',
//       description: 'Embark on a thrilling safari adventure through South Africa’s most famous national parks. This blog provides an insider’s guide to wildlife sightings.',
//       read:'Read More...'
//     },
//   ];

//   return (
//     <div>
//       <h1 className="page-title">Our Latest Blogs</h1>
      
//       {/* Blog Cards Container */}
//       <div className="blog-cards-container">
//         {blogData.map((blog, index) => (
//           <div key={index} className="blog-card">
//             <img src={blog.image} alt="Blog" className="blog-card-image" />
//             <div className="blog-card-content">
//               <p className="small-heading">{blog.smallHeading}</p>
//               <h2 className="big-heading">{blog.bigHeading}</h2>
//               <p className="description">{blog.description}</p>
//               <Link to="/Pages/BlogPage" className="read-more2">{blog.read}</Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogCards;

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

