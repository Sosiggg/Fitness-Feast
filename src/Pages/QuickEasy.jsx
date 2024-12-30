import './MealPlans.css';
import { Link } from 'react-router-dom';
import FitnessFeastLogo from './ImageComp/FitnessFeastLogo.png';
import quickEasyImage from './ImageComp/quick_easy_image.jpg';
import topRatedRecipe1 from './ImageComp/topRatedRecipe1.jpg'; // Add paths to your images
import topRatedRecipe2 from './ImageComp/topRatedRecipe2.jpg';
import topRatedRecipe3 from './ImageComp/topRatedRecipe3.jpg';
import topRatedRecipe4 from './ImageComp/topRatedRecipe4.jpg';
import topRatedRecipe5 from './ImageComp/topRatedRecipe5.jpg';
import topRatedRecipe6 from './ImageComp/topRatedRecipe6.jpg';
import topRatedRecipe7 from './ImageComp/topRatedRecipe7.jpg';
import topRatedRecipe8 from './ImageComp/topRatedRecipe8.jpg';
import topRatedRecipe9 from './ImageComp/topRatedRecipe9.jpg';

function MealPlans() {
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

      <div className="meal-plan-recipes">
        <div className="featured-mealplan">
          <Link to="/mealplan-1" style={{ textDecoration: 'none' }}>
            <img src={quickEasyImage} alt="Featured Quick & Easy" />
          </Link>
          <p className="featured-mealplan-title">FEATURED QUICK & EASY:</p>
          <p className="featured-mealplan-name"><Link to="/mealplan-1" style={{ textDecoration: 'none' }}>7-DAY LOW-SODIUM MEAL PLAN</Link></p>
        </div>
        <div className="meal-plan-content">
          <div className="mealplan-breadcrumb">
            <Link to="/home" className="mealplan-breadcrumb-link">FITNESSFEAST</Link>  &gt; <Link to="/recipes" className="mealplan-breadcrumb-link">RECIPES</Link> &gt; QUICK & EASY
          </div>
          <h2>Quick & Easy Recipes</h2>
          <p>Quick & Easy Recipes gets big love from us because it’s so great to not even have to THINK about what to cook every day. Spend a few hours getting everything prepped and then the rest of your week is made! Now your brain space can be filled with, well...all the other stuff.</p>
        </div>
      </div>

      <div className="top-rated-recipes-container">  
        <h2 className="top-rated-recipes-header">
          <i className="fas fa-trophy"></i> TOP RATED QUICK & EASY
        </h2>
        <p className="top-rated-recipes-description">Out of all the many meal plans on Fitness Feast, these are our shining stars - the<br />recipes we come back to again and again (and again).</p>
        
        <div className="top-rated-recipes-grid">
          <Link to="/recipeone" className="top-rated-recipe">
            <img src={topRatedRecipe1} alt="Top Rated Recipe 1" />
            <div className="top-rated-recipe-info">
              <h4>Grilled Chicken Salad</h4>
              <div className="recipe-rating">
                <span className="stars">★★★★★</span>
                <span className="reviews">5 REVIEWS / 4.8 AVERAGE</span>
              </div>
            </div>
          </Link>
          <Link to="/recipe2" className="top-rated-recipe">
            <img src={topRatedRecipe2} alt="Top Rated Recipe 2" />
            <div className="top-rated-recipe-info">
              <h4>Vegetarian Lasagna</h4>
              <div className="recipe-rating">
                <span className="stars">★★★★★</span>
                <span className="reviews">10 REVIEWS / 4.9 AVERAGE</span>
              </div>
            </div>
          </Link>
          <Link to="/recipe3" className="top-rated-recipe">
            <img src={topRatedRecipe3} alt="Top Rated Recipe 3" />
            <div className="top-rated-recipe-info">
              <h4>Creamy Tomato Pasta</h4>
              <div className="recipe-rating">
                <span className="stars">★★★★★</span>
                <span className="reviews">8 REVIEWS / 5.0 AVERAGE</span>
              </div>
            </div>
          </Link>
          <Link to="/recipe4" className="top-rated-recipe">
            <img src={topRatedRecipe4} alt="Top Rated Recipe 4" />
            <div className="top-rated-recipe-info">
              <h4>Chocolate Chip Cookies</h4>
              <div className="recipe-rating">
                <span className="stars">★★★★★</span>
                <span className="reviews">7 REVIEWS / 4.7 AVERAGE</span>
              </div>
            </div>
          </Link>
          <Link to="/recipe5" className="top-rated-recipe">
            <img src={topRatedRecipe5} alt="Top Rated Recipe 5" />
            <div className="top-rated-recipe-info">
              <h4>Greek Salad</h4>
              <div className="recipe-rating">
                <span className="stars">★★★★★</span>
                <span className="reviews">12 REVIEWS / 4.9 AVERAGE</span>
              </div>
            </div>
          </Link>
          <Link to="/recipe6" className="top-rated-recipe">
            <img src={topRatedRecipe6} alt="Top Rated Recipe 6" />
            <div className="top-rated-recipe-info">
              <h4>Creamy White Chicken Chili</h4>
              <div className="recipe-rating">
                <span className="stars">★★★★★</span>
                <span className="reviews">6 REVIEWS / 4.8 AVERAGE</span>
              </div>
            </div>
          </Link>
          <Link to="/recipe7" className="top-rated-recipe">
            <img src={topRatedRecipe7} alt="Top Rated Recipe 7" />
            <div className="top-rated-recipe-info">
              <h4>Kale Apple Salad</h4>
              <div className="recipe-rating">
                <span className="stars">★★★★★</span>
                <span className="reviews">9 REVIEWS / 4.7 AVERAGE</span>
              </div>
            </div>
          </Link>
          <Link to="/recipe8" className="top-rated-recipe">
            <img src={topRatedRecipe8} alt="Top Rated Recipe 8" />
            <div className="top-rated-recipe-info">
              <h4>Roasted Kale Crunch Salad</h4>
              <div className="recipe-rating">
                <span className="stars">★★★★★</span>
                <span className="reviews">11 REVIEWS / 5.0 AVERAGE</span>
              </div>
            </div>
          </Link>
          <Link to="/recipe9" className="top-rated-recipe">
            <img src={topRatedRecipe9} alt="Top Rated Recipe 9" />
            <div className="top-rated-recipe-info">
              <h4>Aji Verde</h4>
              <div className="recipe-rating">
                <span className="stars">★★★★★</span>
                <span className="reviews">15 REVIEWS / 4.9 AVERAGE</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="top-rated-recipes-container">  
        <h2 className="top-rated-recipes-header">
          ALL QUICK & EASY RECIPES
        </h2>
        <p className="top-rated-recipes-description">Explore our diverse collection of nutritious quick and easy recipes—the ultimate go-to<br />for wholesome, delicious and satisfying meals.</p>
        

        <div className="all-mealplan-grid">
        <Link to="/recipeone" className="all-mealplan-recipe">
          <img src={topRatedRecipe1} alt="All Meal Plan Recipe 1" />
          <div className="all-mealplan-recipe-info">
            <h4>Grilled Chicken Salad</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">5 REVIEWS / 4.8 AVERAGE</span>
            </div>
          </div>
        </Link>
        <Link to="/recipe2" className="all-mealplan-recipe">
          <img src={topRatedRecipe2} alt="All Meal Plan Recipe 2" />
          <div className="all-mealplan-recipe-info">
            <h4>Vegetarian Lasagna</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">10 REVIEWS / 4.9 AVERAGE</span>
            </div>
          </div>
        </Link>
        <Link to="/recipe3" className="all-mealplan-recipe">
          <img src={topRatedRecipe3} alt="All Meal Plan Recipe 3" />
          <div className="all-mealplan-recipe-info">
            <h4>Creamy Tomato Pasta</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">8 REVIEWS / 5.0 AVERAGE</span>
            </div>
          </div>
        </Link>
        <Link to="/recipe4" className="all-mealplan-recipe">
          <img src={topRatedRecipe4} alt="All Meal Plan Recipe 4" />
          <div className="all-mealplan-recipe-info">
            <h4>Chocolate Chip Cookies</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">7 REVIEWS / 4.7 AVERAGE</span>
            </div>
          </div>
        </Link>
        <Link to="/recipe5" className="all-mealplan-recipe">
          <img src={topRatedRecipe5} alt="All Meal Plan Recipe 5" />
          <div className="all-mealplan-recipe-info">
            <h4>Greek Salad</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">12 REVIEWS / 4.9 AVERAGE</span>
            </div>
          </div>
        </Link>
        <Link to="/recipe6" className="all-mealplan-recipe">
          <img src={topRatedRecipe6} alt="All Meal Plan Recipe 6" />
          <div className="all-mealplan-recipe-info">
            <h4>Creamy White Chicken Chili</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">6 REVIEWS / 4.8 AVERAGE</span>
            </div>
          </div>
        </Link>
        <Link to="/recipe7" className="all-mealplan-recipe">
          <img src={topRatedRecipe7} alt="All Meal Plan Recipe 7" />
          <div className="all-mealplan-recipe-info">
            <h4>Kale Apple Salad</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">9 REVIEWS / 4.7 AVERAGE</span>
            </div>
          </div>
        </Link>
        <Link to="/recipe8" className="all-mealplan-recipe">
          <img src={topRatedRecipe8} alt="All Meal Plan Recipe 8" />
          <div className="all-mealplan-recipe-info">
            <h4>Roasted Kale Crunch Salad</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">11 REVIEWS / 5.0 AVERAGE</span>
            </div>
          </div>
        </Link>
        <Link to="/recipe9" className="all-mealplan-recipe">
          <img src={topRatedRecipe9} alt="All Meal Plan Recipe 9" />
          <div className="all-mealplan-recipe-info">
            <h4>Aji Verde</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">15 REVIEWS / 4.9 AVERAGE</span>
            </div>
          </div>
        </Link>
      </div>
    </div>

    <div className="all-mealplan-grid">
        <Link to="/recipeone" className="all-mealplan-recipe">
          <img src={topRatedRecipe1} alt="All Meal Plan Recipe 1" />
          <div className="all-mealplan-recipe-info">
            <h4>Grilled Chicken Salad</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">5 REVIEWS / 4.8 AVERAGE</span>
            </div>
          </div>
        </Link>
        <Link to="/recipe2" className="all-mealplan-recipe">
          <img src={topRatedRecipe2} alt="All Meal Plan Recipe 2" />
          <div className="all-mealplan-recipe-info">
            <h4>Vegetarian Lasagna</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">10 REVIEWS / 4.9 AVERAGE</span>
            </div>
          </div>
        </Link>
        <Link to="/recipe3" className="all-mealplan-recipe">
          <img src={topRatedRecipe3} alt="All Meal Plan Recipe 3" />
          <div className="all-mealplan-recipe-info">
            <h4>Creamy Tomato Pasta</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">8 REVIEWS / 5.0 AVERAGE</span>
            </div>
          </div>
        </Link>
        <Link to="/recipe4" className="all-mealplan-recipe">
          <img src={topRatedRecipe4} alt="All Meal Plan Recipe 4" />
          <div className="all-mealplan-recipe-info">
            <h4>Chocolate Chip Cookies</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">7 REVIEWS / 4.7 AVERAGE</span>
            </div>
          </div>
        </Link>
        <Link to="/recipe5" className="all-mealplan-recipe">
          <img src={topRatedRecipe5} alt="All Meal Plan Recipe 5" />
          <div className="all-mealplan-recipe-info">
            <h4>Greek Salad</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">12 REVIEWS / 4.9 AVERAGE</span>
            </div>
          </div>
        </Link>
        <Link to="/recipe6" className="all-mealplan-recipe">
          <img src={topRatedRecipe6} alt="All Meal Plan Recipe 6" />
          <div className="all-mealplan-recipe-info">
            <h4>Creamy White Chicken Chili</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">6 REVIEWS / 4.8 AVERAGE</span>
            </div>
          </div>
        </Link>
        <Link to="/recipe7" className="all-mealplan-recipe">
          <img src={topRatedRecipe7} alt="All Meal Plan Recipe 7" />
          <div className="all-mealplan-recipe-info">
            <h4>Kale Apple Salad</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">9 REVIEWS / 4.7 AVERAGE</span>
            </div>
          </div>
        </Link>
        <Link to="/recipe8" className="all-mealplan-recipe">
          <img src={topRatedRecipe8} alt="All Meal Plan Recipe 8" />
          <div className="all-mealplan-recipe-info">
            <h4>Roasted Kale Crunch Salad</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">11 REVIEWS / 5.0 AVERAGE</span>
            </div>
          </div>
        </Link>
        <Link to="/recipe9" className="all-mealplan-recipe">
          <img src={topRatedRecipe9} alt="All Meal Plan Recipe 9" />
          <div className="all-mealplan-recipe-info">
            <h4>Aji Verde</h4>
            <div className="all-mealplan-recipe-rating">
              <span className="stars">★★★★★</span>
              <span className="reviews">15 REVIEWS / 4.9 AVERAGE</span>
            </div>
          </div>
        </Link>
      </div>
    
    <footer>
        <p>&copy; 2024 FitnessFeast. All rights reserved.</p>
    </footer>
  </div>
  );
}

export default MealPlans;