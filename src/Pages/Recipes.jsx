import './Recipes.css';
import { Link } from 'react-router-dom';
import FitnessFeastLogo from './ImageComp/FitnessFeastLogo.png';
import topRatedRecipe1 from './ImageComp/topRatedRecipe1.jpg'; // Add paths to your images
import topRatedRecipe2 from './ImageComp/topRatedRecipe2.jpg';
import topRatedRecipe3 from './ImageComp/topRatedRecipe3.jpg';
import topRatedRecipe4 from './ImageComp/topRatedRecipe4.jpg';
import topRatedRecipe5 from './ImageComp/topRatedRecipe5.jpg';
import topRatedRecipe6 from './ImageComp/topRatedRecipe6.jpg';
import topRatedRecipe7 from './ImageComp/topRatedRecipe7.jpg';
import topRatedRecipe8 from './ImageComp/topRatedRecipe8.jpg';
import topRatedRecipe9 from './ImageComp/topRatedRecipe9.jpg';

function Recipes() {
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

      <div className="recipes-container">
        <div className="breadcrumb">
          <Link to="/home" className="breadcrumb-link">FITNESSFEAST</Link> &gt; RECIPES
        </div>
        <h2 className="recipes-section-header">Recipes</h2>
        <h3 className="recipes-sub-header">
          We've taken great care to organize our FitnessFeast recipes comprehensively, covering dietary restrictions, quick weeknight dinners, meal prep suggestions, and our most beloved dishes, ensuring that no matter how you search, you'll discover exactly what you need to achieve your health and fitness aspirations.
        </h3>
      </div>

      <div className="top-rated-recipes-container">  
        <h2 className="top-rated-recipes-header">
          <i className="fas fa-trophy"></i> TOP RATED RECIPES
        </h2>
        <p className="top-rated-recipes-description">Out of all the many recipes on Fitness Feast, these are our shining stars - the<br />recipes we come back to again and again (and again).</p>
        
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
      
      <div className="rec-view-all-recipes">
          <Link to="/all-recipes" className="rec-view-all-recipes-button">
            + VIEW ALL RECIPES
          </Link>
      </div>
      
      <div className="all-categories">
        <h2>POPULAR CATEGORIES</h2>
        <ul className="meal-type-list">
          <li><Link to="/all-recipes">All Recipes</Link></li>
          <li><Link to="/bowls">Bowls</Link></li>
          <li><Link to="/dinner">Dinner</Link></li>
          <li><Link to="/instant-pot">Instant Pot</Link></li>
          <li><Link to="/meal-prep">Meal Prep</Link></li>
          <li><Link to="/most-popular">Most Popular</Link></li>
          <li><Link to="/pasta">Pasta</Link></li>
          <li><Link to="/quick-and-easy">Quick and Easy</Link></li>
          <li><Link to="/salads">Salads</Link></li>
          <li><Link to="/soups">Soups</Link></li>
          <li><Link to="/sugar-free">Sugar-Free</Link></li>
          <li><Link to="/tacos">Tacos</Link></li>
          <li><Link to="/vegan">Vegan</Link></li>
          <li><Link to="/vegetarian">Vegetarian</Link></li>
        </ul>
      </div>

      <div className="all-categories">
        <h2>RECIPES BY MEAL TYPE</h2>
        <ul className="meal-type-list">
          <li><Link to="/appetizer">Appetizer</Link></li>
          <li><Link to="/breakfast">Breakfast</Link></li>
          <li><Link to="/desserts">Desserts</Link></li>
          <li><Link to="/dinner">Dinner</Link></li>
          <li><Link to="/drinks">Drinks</Link></li>
          <li><Link to="/lunch">Lunch</Link></li>
          <li><Link to="/snacks">Snacks</Link></li>
        </ul>
      </div>

      <div className="all-categories">
        <h2>RECIPES BY COURSE</h2>
        <ul className="meal-type-list">
          <li><Link to="/appetizer">Appetizer</Link></li>
          <li><Link to="/baking">Baking</Link></li>
          <li><Link to="/desserts">Desserts</Link></li>
          <li><Link to="/main-dishes">Main Dishes</Link></li>
          <li><Link to="/salads">Salads</Link></li>
          <li><Link to="/sandwiches">Sandwiches</Link></li>
          <li><Link to="/sauces">Sauces</Link></li>
          <li><Link to="/snacks">Snacks</Link></li>
          <li><Link to="/soups">Soups</Link></li>
        </ul>
      </div>

      <div className="all-categories">
        <h2>RECIPES BY DIET</h2>
        <ul className="meal-type-list">
          <li><Link to="/dairy-free">Dairy free</Link></li>
          <li><Link to="/diabetes-friendly">Diabetes-friendly</Link></li>
          <li><Link to="/gluten-free">Gluten free</Link></li>
          <li><Link to="/gluten-free-option">Gluten-free</Link></li>
          <li><Link to="/high-calcium">High calcium</Link></li>
          <li><Link to="/high-fibre">High fibre</Link></li>
          <li><Link to="/high-iron">High iron</Link></li>
          <li><Link to="/high-protein">High protein</Link></li>
          <li><Link to="/low-fat">Low fat</Link></li>
          <li><Link to="/low-kilojoule">Low kilojoule</Link></li>
          <li><Link to="/low-sodium">Low sodium</Link></li>
          <li><Link to="/lower-carb">Lower carb</Link></li>
          <li><Link to="/nut-free">Nut free</Link></li>
          <li><Link to="/vegan">Vegan</Link></li>
          <li><Link to="/vegan-option">Vegan option</Link></li>
          <li><Link to="/vegetarian">Vegetarian</Link></li>
        </ul>
      </div>

      <div className="all-categories">
        <h2>RECIPES BY SEASON</h2>
        <ul className="meal-type-list">
          <li><Link to="/fall">Fall</Link></li>
          <li><Link to="/spring">Spring</Link></li>
          <li><Link to="/summer">Summer</Link></li>
          <li><Link to="/winter">Winter</Link></li>
        </ul>
      </div>

      <div className="all-categories">
        <h2>RECIPES BY METHOD</h2>
        <ul className="meal-type-list">
          <li><Link to="/casserole">Casserole</Link></li>
          <li><Link to="/instant-pot">Instant Pot</Link></li>
          <li><Link to="/sheet-pan">Sheet Pan</Link></li>
          <li><Link to="/slow-cooker">Slow Cooker</Link></li>
          <li><Link to="/stovetop">Stovetop</Link></li>
        </ul>
      </div>

      <div className="all-categories">
        <h2>RECIPES BY INGREDIENT</h2>
        <ul className="meal-type-list">
          <li><Link to="/5-ingredients">5 Ingredients</Link></li>
          <li><Link to="/avocado">Avocado</Link></li>
          <li><Link to="/bacon">Bacon</Link></li>
          <li><Link to="/bell-pepper">Bell Pepper</Link></li>
          <li><Link to="/berry">Berry</Link></li>
          <li><Link to="/broccoli">Broccoli</Link></li>
          <li><Link to="/carrot">Carrot</Link></li>
          <li><Link to="/cauliflower">Cauliflower</Link></li>
          <li><Link to="/chocolate">Chocolate</Link></li>
          <li><Link to="/eggs">Eggs</Link></li>
          <li><Link to="/fish-seafood">Fish and Seafood</Link></li>
          <li><Link to="/jalapeno">Jalapeño</Link></li>
          <li><Link to="/kale">Kale</Link></li>
          <li><Link to="/legume">Legume</Link></li>
          <li><Link to="/lemon">Lemon</Link></li>
          <li><Link to="/lime">Lime</Link></li>
          <li><Link to="/meat-chicken">Meat and Chicken</Link></li>
          <li><Link to="/mushroom">Mushroom</Link></li>
          <li><Link to="/pasta">Pasta</Link></li>
          <li><Link to="/peanut-butter">Peanut Butter</Link></li>
          <li><Link to="/pumpkin">Pumpkin</Link></li>
          <li><Link to="/quinoa">Quinoa</Link></li>
          <li><Link to="/rice">Rice</Link></li>
          <li><Link to="/spinach">Spinach</Link></li>
          <li><Link to="/sweet-potato">Sweet Potato</Link></li>
          <li><Link to="/tofu">Tofu</Link></li>
          <li><Link to="/tomato">Tomato</Link></li>
          <li><Link to="/zucchini">Zucchini</Link></li>
        </ul>
      </div>

      <footer>
        <p>&copy; 2024 FitnessFeast. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Recipes;
