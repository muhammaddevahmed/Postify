
import "./SecondBanner.css";

const SecondBanner = () => {
  return (
    <div className="second-banner">
      <h2 className="banner-heading">
        Transform Your Future with the great <br /> with AI Technology
      </h2>
      
      <div className="email-subscription">
        <input type="email" placeholder="Enter your email" className="email-input" />
        <button className="get-started-btn">Get Started</button>
      </div>

      <p className="banner-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi inventore, soluta, cupiditate commodi, tenetur autem assumenda atque ab ad sed corrupti mollitia doloremque aut vero eos quae ut voluptatem! Unde. <br />
        Subscribe now for exclusive updates and insights.
      </p>
    </div>
  );
};

export default SecondBanner;
