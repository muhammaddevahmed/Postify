import Navbar from "../assets/Components/homeComponents/navbar";
import BlogCards from "../assets/Components/BlogComponents/BlogCards";
import Header from "../assets/Components/BlogComponents/Header"; 
import Footer from "../assets/Components/homeComponents/Footer";

import SecondBanner from "../assets/Components/homeComponents/SecondBanner";


const Blog = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <BlogCards />
      <SecondBanner/>
      <Footer />
      
    </div>
  );
  
};

export default Blog;
