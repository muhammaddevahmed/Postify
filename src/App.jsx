import { Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import BlogPage from './BlogPage';
import Navbar from "./assets/Components/homeComponents/navbar";
import Banner from "./assets/Components/homeComponents/Banner";
import FeaturedCard from "./assets/Components/homeComponents/FeaturedCard";
import RecentPosts from "./assets/Components/homeComponents/RecentPosts";
import PopularPosts from "./assets/Components/homeComponents/PopularPosts";
import SecondBanner from "./assets/Components/homeComponents/SecondBanner";
import Footer from "./assets/Components/homeComponents/Footer";

function App() {
  return (
    <div>
        <Navbar />
      <Routes>
    
        {/* Correct path for Blog Page */}
        <Route path="/Blog" element={<Blog />} />
        <Route path="/BlogPage" element={<BlogPage />} />
         
        <Route 
          path="/" 
          element={
            <>
             
              <Banner />
              <div className="section-gap">
                <FeaturedCard />
              </div>
              <RecentPosts />
              <PopularPosts />
             
              
            </>
            
          } 
          
        />
        
       
      </Routes>
      <SecondBanner />
      <Footer />
    </div>
  );
}

export default App;
