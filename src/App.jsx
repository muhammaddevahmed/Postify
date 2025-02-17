import { Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import BlogPage from './BlogPage';
import Contact from './Contact';
import Navbar from "./assets/Components/homeComponents/navbar";
import Banner from "./assets/Components/homeComponents/Banner";
import FeaturedCard from "./assets/Components/homeComponents/FeaturedCard";
import RecentPosts from "./assets/Components/homeComponents/RecentPosts";
import PopularPosts from "./assets/Components/homeComponents/PopularPosts";
import SecondBanner from "./assets/Components/homeComponents/SecondBanner";
import Footer from "./assets/Components/homeComponents/Footer";
import Error from './Error';

function App() {
  return (
    <div>
        <Navbar />
      <Routes>
    
        {/* Correct path for Blog Page */}
        <Route path="/Blog" element={<Blog />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Error" element={<Error />} />
         
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
              <SecondBanner />
             
              
            </>
            
          } 
          
        />
        
       
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
