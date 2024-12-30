import './About.css';
import { Link } from 'react-router-dom';
import FitnessFeastLogo from './ImageComp/FitnessFeastLogo.png';
import IviPhoto from './ImageComp/IviPhoto.png';  
import IanPhoto from './ImageComp/IanPhoto.png';  

function About() {
  return (
    <div className="main-layout">
      <div className="header">
        <div className="container">
          <div className="logo">
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <img src={FitnessFeastLogo} alt="FitnessFeast Logo" />
          </Link>
            <h1 className="site-title">
              <Link to="/home" style={{ textDecoration: 'none' }}>
                <span className="fitness">Fitness</span>
                <span className="feast">Feast</span>
              </Link>
            </h1>
          </div>
          <div className="search-container">
            <input className="search-input" type="text" placeholder="Search Recipes..." name="search"/>
            <button className="search-button" type="submit"><i className="fas fa-search search-icon"></i></button>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61561407261641" className="social-link"><i className="fab fa-facebook"></i></a>
            <a href="https://x.com/FitnessFeast" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/" className="social-link"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <nav className="nav-container">
        <ul className="nav-list">
          <li><Link to="/home">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/advice">ADVICE</Link></li>
          <li><Link to="/recipes">RECIPES</Link></li>
          <li><Link to="/meal-plans">MEAL PLANS</Link></li>
        </ul>
      </nav>

      <div className="about-section">
        <div className="about-part">
          <img src={IviPhoto} alt="Ivi Salas" className="about-photo" />
          <div className="about-text">
            <div className="about-breadcrumb">
            <Link to="/home" className="about-breadcrumb-link">FITNESSFEAST</Link> &gt; RECIPES
          </div>
            <h3>About Me</h3>
            <p className="intro-text">
            <span className="intro-text-prefix">HI, MY NAME IS&nbsp;</span> <span className="styled-name">&nbsp;Ivi Susej Marie E. Salas!</span>
            </p>
            <p className="2ndintro-text">
              And FitnessFeast is my little corner of the internet!
            </p>
            <p className="3rdintro-text">
              Ivi is a dedicated fitness enthusiast with a passion for creating nutritious recipes. With a background in nutrition and personal training, Ivi loves helping others achieve their health goals through delicious and balanced meals. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="about-follow-us-section">
          <div className="follow-us-text">FOLLOW US</div>
          <div className="follow-us-icons">
            <Link to="#" className="follow-us-social-link"><i className="fab fa-facebook"></i></Link>
            <Link to="#" className="follow-us-social-link"><i className="fab fa-twitter"></i></Link>
            <Link to="#" className="follow-us-social-link"><i className="fab fa-instagram"></i></Link>
          </div>
          <div className="email-signup">
            <span className="signup-text">
              <span className="signup">Sign Up</span> <span className="for-email-updates">FOR EMAIL UPDATES</span>
            </span>
            <form action="#" method="POST">
              <input type="text" name="firstname" placeholder="First Name"/>
              <input type="email" name="email" placeholder="Email"/>
              <button type="submit">GO</button>
            </form>
          </div>
        </div>

        <div className="about-part-ian">
          <img src={IanPhoto} alt="Ian Olandria" className="about-photo-ian" />
          <div className="about-text-ian">
          <h3>About Me</h3>
            <p className="intro-text">
            <span className="intro-text-prefix">HI, MY NAME IS&nbsp;</span> <span className="styled-name">&nbsp;Ian Kent T. Olandria!</span>
            </p>
            <p className="2ndintro-text">
              And FitnessFeast is my little corner of the internet!
            </p>
            <p className="3rdintro-text">
              Ian is a culinary expert who specializes in crafting meal plans for active lifestyles. His creative approach to cooking ensures that every dish is both flavorful and beneficial for your fitness journey. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 FitnessFeast. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
