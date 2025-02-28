import Navbar from "../assets/Components/homeComponents/navbar";
import AboutBanner from "../assets/Components/AboutComponents/AboutBanner";
import AboutHeader from "../assets/Components/AboutComponents/AboutHeader";
import AboutInfoCards from "../assets/Components/AboutComponents/AboutInfoCards";
import HowWeWork from "../assets/Components/AboutComponents/HowWeWork";
import Footer from "../assets/Components/homeComponents/Footer";

import SecondBanner from "../assets/Components/homeComponents/SecondBanner";


const About = () => {
    return (
      <div>
        <Navbar />
        <AboutHeader />
        <AboutBanner />
        <HowWeWork />
        <AboutInfoCards />
        <SecondBanner />
        <Footer />
        
        
        
      </div>
    );
    
  };
  
  export default About;