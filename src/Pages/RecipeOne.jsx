import React, { useState } from 'react';
import './CreamySilverbeatPasta.css';
import { Link } from 'react-router-dom';
import PastaDish from './ImageComp/PastaDish.jpg';
import FitnessFeastLogo from './ImageComp/FitnessFeastLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Checkbox from './Checkbox'; // Import Checkbox component

function RecipeOne() {
  const [steps, setSteps] = useState([
    { id: 1, text: 'Bring a large saucepan of water to the boil. Add linguine and cook for 10 minutes or until al dente. Drain pasta, reserving 1⁄4 cup of cooking liquid.', completed: false },
    { id: 2, text: 'In a blender add cottage cheese, milk and cornflour, and blitz to a smooth and cream-like consistency. Set aside.', completed: false },
    { id: 3, text: 'Heat oil in a large frypan over medium to high heat. Add mushrooms and cook for 8-10 minutes until browned. Add silverbeet and garlic and cook, stirring, for 5 minutes until wilted.', completed: false },
    { id: 4, text: 'Add pasta and reserved pasta water to the pan. Pour in cottage cheese mixture and swirl pasta in sauce to emulsify and thicken. Stir in parmesan, parsley, lemon zest and season with pepper. Remove from heat and serve.', completed: false }
  ]);

  const handleCheckboxChange = (id) => {
    const updatedSteps = steps.map(step => {
      if (step.id === id) {
        return { ...step, completed: !step.completed };
      }
      return step;
    });
    setSteps(updatedSteps);
  };

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

      <div className="new-container">
        <h2 className="combined-heading">NUTRITIOUS RECIPES TAILORED FOR <span>an active and healthy lifestyle.</span></h2>
      </div>

      <div className="recipe-container">
        <div className="recipe-content">
          <div className="CBP-photo-container">
            <img src={PastaDish} alt="Creamy Silverbeat Pasta" className="pasta-photo" />
            <div className="nutrition-info">
              <div className="CBP-circle"><span>KCAL</span><br />350</div>
              <div className="CBP-circle"><span>PRO</span><br />20g</div>
              <div className="CBP-circle"><span>CARB</span><br />50g</div>
              <div className="CBP-circle"><span>FAT</span><br />15g</div>
              <div className="CBP-circle"><span>FIBER</span><br />5g</div>
            </div>
          </div>
          <div className="dish-name">Creamy Silverbeat Pasta</div>
          <div className="tags-logo-container">
            <div className="tags">
              <Link to="/high-carb-page" className="tag-link">
                <div className="tag-box">HIGH CARB</div>
              </Link>
              <Link to="/high-protein-page" className="tag-link">
                <div className="tag-box">HIGH PROTEIN</div>
              </Link>
            </div>
          </div>
          <div className="recipe-description-container">
             <div className="recipe-description">
               <p>Experience a burst of flavor and wholesome goodness with our creamy pasta delight! Perfect for any occasion, this tantalizing treat promises pure satisfaction and nourishment.</p>
             </div>
          </div>
          <div className="recipe-details">
            <div className="time-info">
              <FontAwesomeIcon icon={faClock} alt="Alarm clock icon" className="alarm-clock-icon" />
              <div className="time-box">Prep: 5 mins</div>
              <div className="time-box">Cook: 15 mins</div>
              <div className="time-box">Fresh: 1 day</div>
            </div>
            <div className="difficulty">
              <span>Difficulty: Beginner</span>
            </div>
          </div>
          <div className="ingredients-container">
            <div className="ingredients">
              <div className="table-container">
                <table className="table-fill">
                  <thead>
                    <tr>
                      <th className="text-left">INGREDIENT</th>
                      <th className="text-left">AMOUNT</th>
                      <th className="text-left">CALORIES</th>
                    </tr>
                  </thead>
                  <tbody className="table-hover">
                    <tr>
                      <td className="text-left">Linguine</td>
                      <td className="text-left">250 g</td>
                      <td className="text-left">900cal</td>
                    </tr>
                    <tr>
                      <td className="text-left">Cottage cheese</td>
                      <td className="text-left">150 g</td>
                      <td className="text-left">125cal</td>
                    </tr>
                    <tr>
                      <td className="text-left">Reduced-fat milk</td>
                      <td className="text-left">1 cup</td>
                      <td className="text-left">100cal</td>
                    </tr>
                    <tr>
                      <td className="text-left">Cornflour</td>
                      <td className="text-left">1 tbsp</td>
                      <td className="text-left">30cal</td>
                    </tr>
                    <tr>
                      <td className="text-left">Extra-virgin olive oil</td>
                      <td className="text-left">2 tsp</td>
                      <td className="text-left">80cal</td>
                    </tr>
                    <tr>
                      <td className="text-left">White cup mushrooms (Sliced)</td>
                      <td className="text-left">500 g</td>
                      <td className="text-left">90cal</td>
                    </tr>
                    <tr>
                      <td className="text-left">Silverbeet (Washed and coarsely chopped)</td>
                      <td className="text-left">1 bunch</td>
                      <td className="text-left">50cal</td>
                    </tr>
                    <tr>
                      <td className="text-left">Garlic</td>
                      <td className="text-left">2 cloves</td>
                      <td className="text-left">10cal</td>
                    </tr>
                    <tr>
                      <td className="text-left">Parmesan (Finely grated)</td>
                      <td className="text-left">15 g</td>
                      <td className="text-left">110cal</td>
                    </tr>
                    <tr>
                      <td className="text-left">Chopped fresh parsley</td>
                      <td className="text-left">2 tbsp</td>
                      <td className="text-left">2cal</td>
                    </tr>
                    <tr>
                      <td className="text-left">Lemon zest</td>
                      <td className="text-left">1 tsp</td>
                      <td className="text-left">2cal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4 className="steps-method">INSTRUCTIONS</h4>
              <div className="steps-container">
                {steps.map(step => (
                  <div key={step.id} className={step.completed ? 'completed-step' : ''}>
                    <Checkbox
                      id={`step-${step.id}`}
                      label={`Step ${step.id}`}
                      checked={step.completed}
                      onChange={() => handleCheckboxChange(step.id)}
                    />
                    <p className="steps-description">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="nutritional-info-container">
                <h2>Nutritional Information <span>(per serving)</span></h2>
                <div className="nutritional">
                  <ul>
                    <li className="nutrition"><span className="big-nut">Calories</span> 428cal</li>
                    <li className="nutrition"><span className="big-nut">Kilojoules</span> 1798kJ</li>
                    <li className="nutrition"><span className="big-nut">Protein</span> 19g</li>
                    <li className="nutrition"><span className="big-nut">Total fat</span> 13.5g</li>
                    <li className="nutrition"><span className="big-nut">Saturated fat</span> 0.5g</li>
                    <li className="nutrition"><span className="big-nut">Carbohydrates</span> 52g</li>
                    <li className="nutrition"><span className="big-nut">Sugars</span> 7.6g</li>
                    <li className="nutrition"><span className="big-nut">Dietary fibre</span> 0.4g</li>
                    <li className="nutrition"><span className="big-nut">Sodium</span> 324mg</li>
                    <li className="nutrition"><span className="big-nut">Calcium</span> 237mg</li>
                    <li className="nutrition"><span className="big-nut">Iron</span> 3.8mg</li>
                  </ul>
                </div>
                <div className="guide-info">
                  <b>Note:</b> This nutrition analysis is a guide only. Nutrition composition will vary depending on the exact ingredients used. See our guides on your optimal daily nutrition intake, and supermarket shopping.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>&copy; 2024 FitnessFeast. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default RecipeOne;
