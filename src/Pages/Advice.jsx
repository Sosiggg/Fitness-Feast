import './Advice.css';
import { Link } from 'react-router-dom';
import FitnessFeastLogo from './ImageComp/FitnessFeastLogo.png';
import asktheexpert1 from './ImageComp/asktheexpert1.jpg';
import asktheexpert2 from './ImageComp/asktheexpert2.jpg';
import asktheexpert3 from './ImageComp/asktheexpert3.jpg';
import asktheexpert4 from './ImageComp/asktheexpert4.jpg';
import asktheexpert5 from './ImageComp/asktheexpert5.jpg';
import asktheexpert6 from './ImageComp/asktheexpert6.jpg';
import asktheexpert7 from './ImageComp/asktheexpert7.jpg';
import asktheexpert8 from './ImageComp/asktheexpert8.jpg';
import asktheexpert9 from './ImageComp/asktheexpert9.jpg';
import asktheexpert10 from './ImageComp/asktheexpert10.jpg';

function Advice() {
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
            <a href="https://www.facebook.com/" className="social-link"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com/" className="social-link"><i className="fab fa-twitter"></i></a>
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

      <div className="advice-container">
        <div className="breadcrumb">
          <Link to="/home" className="breadcrumb-link">FITNESSFEAST</Link> &gt; ADVICE
        </div>
        <h2 className="section-header">Ask the Experts</h2>
        <h3 className="sub-header">Our team of experts at FitnessFeast is dedicated to providing insightful and personalized answers to all your recipe-related questions. Whether you're looking for dietary advice, meal planning tips, or specific recipe recommendations tailored to your fitness goals, we're here to help you navigate every step of your culinary journey with confidence and ease.</h3>
      </div>

        <div className="advice-image-grid">
          {/* First set of 3 images */}
          <div className="advice-image-square">
            <Link to="#"><img src={asktheexpert1} alt="1" /></Link>
            <h4><Link to="#">Why do my energy levels drop in winter?</Link></h4>
            <p>Uncover the surprising reasons behind your winter energy slump and learn how to stay energized all season long!</p>
          </div>
          <div className="advice-image-square">
            <Link to="#"><img src={asktheexpert2} alt="2" /></Link>
            <h4><Link to="#">What to eat if you have Iron Deficiency?</Link></h4>
            <p>Discover the top foods to boost your iron levels and combat fatigue with our expert guide!</p>
          </div>
          <div className="advice-image-square">
            <Link to="#"><img src={asktheexpert3} alt="3" /></Link>
            <h4><Link to="#">AI for dietitians: Revolutionize the way you work</Link></h4>
            <p>Explore how AI is reshaping dietetics, offering innovative tools to optimize client care and streamline workflow.</p>
          </div>

          {/* Second set of 3 images */}
          <div className="advice-image-square">
            <Link to="#"><img src={asktheexpert4} alt="4" /></Link>
            <h4><Link to="#">Are nightshade foods harmful or healthy?</Link></h4>
            <p>Nightshade foods can be controversial; while they are nutritious for many, some individuals may experience sensitivities.</p>
          </div>
          <div className="advice-image-square">
            <Link to="#"><img src={asktheexpert5} alt="5" /></Link>
            <h4><Link to="#">What to eat if you have chronic fatigue syndrome</Link></h4>
            <p>Discover essential dietary strategies to manage chronic fatigue syndrome and reclaim your energy.</p>
          </div>
          <div className="advice-image-square">
            <Link to="#"><img src={asktheexpert6} alt="6" /></Link>
            <h4><Link to="#">How to boost gut health if fermented foods aren’t your thing</Link></h4>
            <p>Boost gut health with fiber-rich foods, probiotic supplements, and prebiotic sources.</p>
          </div>

          {/* Third set of 3 images */}
          <div className="advice-image-square">
            <Link to="#"><img src={asktheexpert7} alt="7" /></Link>
            <h4><Link to="#">What are the ingredients needed to make a gut healthy smoothie</Link></h4>
            <p>This green smoothie is packed with gut-healing ingredients</p>
          </div>
          <div className="advice-image-square">
            <Link to="#"><img src={asktheexpert8} alt="8" /></Link>
            <h4><Link to="#">The truth about sugary treats</Link></h4>
            <p>Unlock the surprising truths about sugary treats and their effects on your well-being that you never knew.</p>
          </div>
          <div className="advice-image-square">
            <Link to="#"><img src={asktheexpert9} alt="9" /></Link>
            <h4><Link to="#">Can in-between meal snacks help with portion control?</Link></h4>
            <p>Explore how strategic in-between meal snacks can effectively aid in managing portion control.</p>
          </div>
          <div className="advice-image-square">
            <Link to="#"><img src={asktheexpert10} alt="10" /></Link>
            <h4><Link to="#">Eating breakfast vs intermittent fasting</Link></h4>
            <p>Eager to unlock the secrets of optimal metabolism? Discover how here.</p>
          </div>
        </div>
      
      <footer className="footer">
        <p>&copy; 2024 Fitness Feast. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Advice;
