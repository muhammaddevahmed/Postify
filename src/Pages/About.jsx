import AboutBanner from "../assets/Components/AboutComponents/AboutBanner";
import AboutHeader from "../assets/Components/AboutComponents/AboutHeader";
import AboutInfoCards from "../assets/Components/AboutComponents/AboutInfoCards";
import HowWeWork from "../assets/Components/AboutComponents/HowWeWork";

import SecondBanner from "../assets/Components/homeComponents/SecondBanner";


const About = () => {
    return (
      <div>
        
        <AboutHeader />
        <AboutBanner />
        <HowWeWork />
        <AboutInfoCards />
        <SecondBanner />
        
        
        
      </div>
    );
    
  };
  
  export default About;