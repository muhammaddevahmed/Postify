import { useNavigate } from 'react-router-dom';
import './Error.css'; // Create this CSS file
import SecondBanner from './assets/Components/homeComponents/SecondBanner';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div>
    <div className="error-container">
      <div className="error-card">
        <h1 className="error-code">404</h1>
        <div className="error-content">
          <h2 className="error-title">Sorry!</h2>
          <p className="error-message">
            The link is broken, try to refresh or go to home
          </p>
          <button 
            className="home-button"
            onClick={() => navigate('/')}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
    <SecondBanner/>
    </div>
  );
};

export default Error;