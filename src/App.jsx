import { Routes, Route } from 'react-router-dom';
import Blog from './Pages/Blog';
import BlogPage from './Pages/BlogPage';
import Contact from './Pages/Contact';
import Navbar from "./assets/Components/homeComponents/navbar";
import Banner from "./assets/Components/homeComponents/Banner";
import FeaturedCard from "./assets/Components/homeComponents/FeaturedCard";
import RecentPosts from "./assets/Components/homeComponents/RecentPosts";
import PopularPosts from "./assets/Components/homeComponents/PopularPosts";
import SecondBanner from "./assets/Components/homeComponents/SecondBanner";
import Footer from "./assets/Components/homeComponents/Footer";
import Error from './Pages/Error';
import About from './Pages/About';

function App() {
  return (
    <div>
         <Navbar />
      <Routes>
    
        {/* Correct path for Blog Page */}
        <Route path="/Pages/Blog" element={<Blog />} />
        <Route path="/Pages/BlogPage" element={<BlogPage />} />
        <Route path="/Pages/About" element={<About />} />
        <Route path="/Pages/Contact" element={<Contact />} />
        <Route path="/Pages/Error" element={<Error />} />
         
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
