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
      <Navbar />
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
