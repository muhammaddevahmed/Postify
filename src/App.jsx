import { Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Navbar from "./homeComponents/navbar";
import Banner from "./homeComponents/Banner";
import FeaturedCard from "./homeComponents/FeaturedCard";
import RecentPosts from "./homeComponents/RecentPosts";
import PopularPosts from "./homeComponents/PopularPosts";
import SecondBanner from "./homeComponents/SecondBanner";
import Footer from "./homeComponents/Footer";


import "./App.css";


function App() {
  return (
    <div>
       
       <div>
  <Navbar />
  <Routes>
    <Route path="/blog" element={<Blog />} />
  </Routes>
</div>
      <Banner />
      <div className="section-gap"> {/* This adds the gap */}
        <FeaturedCard />
      </div>
      <RecentPosts />
      <PopularPosts />
      <SecondBanner />
      <Footer />
    </div>
  );
}

export default App;
