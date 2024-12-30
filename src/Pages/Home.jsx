import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import TabContainer from './TabContainer.jsx';
import FitnessFeastLogo from './ImageComp/FitnessFeastLogo.png';
import bowlImage from './ImageComp/bowl_image.jpg';
import saladImage from './ImageComp/salad_image.jpg';
import smoothieImage from './ImageComp/smoothie_image.jpg';
import wrapsImage from './ImageComp/wraps_image.jpg';
import dinnerImage from './ImageComp/dinner_image.png';
import healthyImage from './ImageComp/healthy_image.jpg';
import instantPotImage from './ImageComp/instant_pot_image.jpg';
import mealPrepImage from './ImageComp/meal_prep_image.jpg';
import quickEasyImage from './ImageComp/quick_easy_image.jpg';
import soupsImage from './ImageComp/soups_image.jpg';
import stirFriesImage from './ImageComp/stir_fries_image.jpg';
import vegetarianImage from './ImageComp/vegetarian_image.jpg';
import veganImage from './ImageComp/vegan_image.jpg';
import foodImage1 from './ImageComp/food_image_1.jpg';
import foodImage2 from './ImageComp/food_image_2.jpg';
import foodImage3 from './ImageComp/food_image_3.jpg';
import iviAndIanPhoto from './ImageComp/ivi-and-ian-photo.jpg';
import recipeCollectionImage from './ImageComp/recipe-collection-image.jpg';
import vegetarianRecipe1 from './ImageComp/vegetarian-recipe1.jpg';
import vegetarianRecipe2 from './ImageComp/vegetarian-recipe2.jpg';
import vegetarianRecipe3 from './ImageComp/vegetarian-recipe3.jpg';
import vegetarianRecipe4 from './ImageComp/vegetarian-recipe4.jpg';
import quickRecipe1 from './ImageComp/quick-recipe1.jpg';
import quickRecipe2 from './ImageComp/quick-recipe2.jpg';
import quickRecipe3 from './ImageComp/quick-recipe3.jpg';
import quickRecipe4 from './ImageComp/quick-recipe4.jpg';
import pinterestRecipe1 from './ImageComp/pinterest-recipe1.jpg';
import pinterestRecipe2 from './ImageComp/pinterest-recipe2.jpg';
import pinterestRecipe3 from './ImageComp/pinterest-recipe3.jpg';
import pinterestRecipe4 from './ImageComp/pinterest-recipe4.jpg';
import FFCookbook from './ImageComp/cookbook-landscape.jpg';

function Home() {
  
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

      <div className="content">
        <div className="food-container" data-text="BOWLS">
          <Link to="/bowls" className="food-link"></Link>
          <img className="food-image" src={bowlImage} alt="Bowls-Category" />
          <div className="text-rectangle">
            <span className="rectangle-text">BOWLS</span>
          </div>
        </div>
        <div className="food-container" data-text="SALADS">
          <Link to="/salads" className="food-link"></Link>
          <img className="food-image" src={saladImage} alt="Salads-Category" />
          <div className="text-rectangle">
            <span className="rectangle-text">SALADS</span>
          </div>
        </div>
        <div className="food-container" data-text="SMOOTHIES">
          <Link to="/smoothies" className="food-link"></Link>
          <img className="food-image" src={smoothieImage} alt="Smoothies-Category" />
          <div className="text-rectangle">
            <span className="rectangle-text">SMOOTHIES</span>
          </div>
        </div>
        <div className="food-container" data-text="WRAPS">
          <Link to="/wraps" className="food-link"></Link>
          <img className="food-image" src={wrapsImage} alt="Wraps-Category" />
          <div className="text-rectangle">
            <span className="rectangle-text">WRAPS</span>
          </div>
        </div>
      </div>

      <div className="additional-categories">
        <div className="category-container">
          <Link to="/dinner" className="circle-link">
            <div className="circle">
            <img src={dinnerImage} alt="Dinner" />
            </div>
            <div className="circle-heading">DINNER</div>
          </Link>
        </div>
        <div className="category-container">
          <Link to="/healthy" className="circle-link">
            <div className="circle">
            <img src={healthyImage} alt="Healthy" />
            </div>
            <div className="circle-heading">HEALTHY</div>
          </Link>
        </div>
        <div className="category-container">
          <Link to="/instant-pot" className="circle-link">
            <div className="circle">
            <img src={instantPotImage} alt="Instant Pot" />
            </div>
            <div className="circle-heading">INSTANT POT</div>
          </Link>
        </div>
        <div className="category-container">
          <Link to="/meal-plans" className="circle-link">
            <div className="circle">
            <img src={mealPrepImage} alt="Meal Prep" />
            </div>
            <div className="circle-heading">MEAL PLANS</div>
          </Link>
        </div>
        <div className="category-container">
          <Link to="/quick-and-easy" className="circle-link">
            <div className="circle">
            <img src={quickEasyImage} alt="Quick and Easy" />
            </div>
            <div className="circle-heading">QUICK AND EASY</div>
          </Link>
        </div>
        <div className="category-container">
          <Link to="/soups" className="circle-link">
            <div className="circle">
            <img src={soupsImage} alt="Soups" />
            </div>
            <div className="circle-heading">SOUPS</div>
          </Link>
        </div>
        <div className="category-container">
          <Link to="/stir-fry" className="circle-link">
            <div className="circle">
            <img src={stirFriesImage} alt="Stir-Fries" />
            </div>
            <div className="circle-heading">STIR-FRIES</div>
          </Link>
        </div>
        <div className="category-container">
          <Link to="/vegetarian" className="circle-link">
            <div className="circle">
              <img src={vegetarianImage} alt="Vegetarian"/>
            </div>
            <div className="circle-heading">VEGETARIAN</div>
          </Link>
        </div>
        <div className="category-container">
          <Link to="/vegan" className="circle-link">
            <div className="circle">
            <img src={veganImage} alt="Vegan" />
            </div>
            <div className="circle-heading">VEGAN</div>
          </Link>
        </div>
      </div>

      <div className="search-view-container">
        <div className="search-container-1">
          <input className="search-input-1" type="text" placeholder="Search our recipes..." name="search"/>
          <button className="search-button-1" type="submit"><i className="fas fa-search search-icon"></i></button>
        </div>
          <span className="or-text">or</span>
          <Link to="/all-recipes" className="view-all-button">VIEW ALL RECIPES</Link>
      </div>

      <div className="main-container">
        <div className="left-container">
          <h2 className="latest-heading">THE LATEST & GREATEST</h2>
          <div className="latest-blog-section">
            <div className="blog-grid">
              <div className="blog-item">
                <Link to="/creamysilverbeatpasta"><img src={foodImage1} alt="Food 1"/></Link>
                <div className="blog-info">
                  <span className="blog-date">MARCH 13, 2024</span>
                  <h3 className="blog-title"><Link to="/creamysilverbeatpasta">Creamy Silverbeet Pasta</Link></h3>
                  <p className="blog-description">Experience Link burst of flavor and wholesome goodness with our creamy pasta delight! Perfect for any occasion, this tantalizing treat promises pure satisfaction and nourishment.</p>
                  <Link to="/creamysilverbeatpasta" className="continue-reading">CONTINUE READING</Link>
                </div>
               </div>
               <hr/>
               <div className="blog-item">
                  <Link to="/herbysummertart"><img src={foodImage2} alt="Food 2"/></Link>
                  <div className="blog-info">
                    <span className="blog-date">MARCH 12, 2024</span>
                    <h3 className="blog-title"><Link to="/herbysummertart">Herby Summer Tarts</Link></h3>
                    <p className="blog-description">Savor the vibrant essence of summer with our delectable herby summer tart, bursting with fresh herbs and delightful seasonal flavors, perfect for any occasion or intimate gathering.</p>
                    <Link to="/herbysummertart" className="continue-reading">CONTINUE READING</Link>
                  </div>
                </div>
                <hr/>
                <div className="blog-item">
                  <Link to="/pawpawsalad"><img src={foodImage3} alt="Food 3"/></Link>
                  <div className="blog-info">
                    <span className="blog-date">MARCH 11, 2024</span>
                    <h3 className="blog-title"><Link to="/pawpawsalad">Nutrient-packed Pawpaw Salad</Link></h3>
                    <p className="blog-description"> This high-fiber, high-protein salad promises to keep you feeling satisfied, energized, and nourished throughout the day, supporting your health and well-being with each delicious bite!</p>
                    <Link to="/pawpawsalad" className="continue-reading">CONTINUE READING</Link>
                  </div>
                </div>
                <hr/>
                <div className="view-more-button">
                  <Link to="/recipes" className="view-more">VIEW MORE RECIPE POSTS</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="right-content-container">
              <div className="image-wrapper">
                <Link to="your-link-url" className="recipe-collection-link">
                  <img className="recipe-collection-image" src={recipeCollectionImage} alt="Recipe Collection"/>
                </Link>
              </div>
              <div className="title-recipe-collection">RECIPE TAGS</div>
              <div className="buttons-wrapper">
                <Link to="most-popular-recipes.html" className="button-recipe-collection"><b>1 </b> Dairy Free Recipes<span className="article-count"> 20</span></Link>
                <Link to="quick-easy-recipes.html" className="button-recipe-collection"><b>2 </b> Gluten Free Recipes<span className="article-count"> 39</span></Link>
                <Link to="meal-prep-recipes.html" className="button-recipe-collection"><b>3 </b> High Calcium Recipes<span className="article-count"> 47</span></Link>
                <Link to="healthy-recipes.html" className="button-recipe-collection"><b>4 </b> High Fibre Recipes<span className="article-count"> 51</span></Link>
                <Link to="salad-recipes.html" className="button-recipe-collection"><b>5 </b> High Iron Recipes<span className="article-count"> 69</span></Link>
                <Link to="instant-pot-recipes.html" className="button-recipe-collection"><b>6 </b> High Protien Recipes<span className="article-count"> 73</span></Link>
                <Link to="vegetarian-recipes.html" className="button-recipe-collection"><b>7 </b> Low Carb Recipe<span className="article-count"> 88</span></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="about-us-preview">
        <div className="about-me-container ivi">
          <h2>HI! I'M IVI.</h2>
          <h3>nice to meet you!</h3>
          <p>I am Link student from BSIT - 2R1, and we created this website for our Web Systems and Technology course. It's Link recipe website designed to appeal to fit and active users who want to cook healthy meals.</p>
          <Link to="/about" className="about-me-link">LEARN MORE</Link>
        </div>
        <div className="photo-container">
          <img src={iviAndIanPhoto} alt="Ivi and Ian"/>
        </div>
        <div className="about-me-container ian">
          <h2>HI! I'M IAN.</h2>
          <h3>nice to meet you!</h3>
          <p>I am Link student from BSIT - 2R1, and we created this website for our Web Systems and Technology course. It's Link recipe website designed to appeal to fit and active users who want to cook healthy meals.</p>
          <Link to="/about" className="about-me-link">LEARN MORE</Link>
        </div>
      </div>

      <div className="follow-us-section">
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
      
      <TabContainer/>

      <div id="vegetarian" className="tab-content active">
        <div className="image-grid">
          <div className="image-square">
            <Link to="vegetarian-recipe1.html">
              <img data-index="0" img src={vegetarianRecipe1} alt="Vegetarian-Recipe 1"/>
              <div className="label">GLUTEN FREE</div>
              <p className="square-description">Ridiculously Good Air<br/>Fryer Tofu</p>
            </Link>
          </div>
          <div className="image-square">
            <Link to="vegetarian-recipe2.html">
              <img data-index="1" img src={vegetarianRecipe2} alt="Vegetarian-Recipe 2"/>
              <div className="label">HIGH FIBRE</div>
              <p className="square-description">Butter Cauliflower and<br/>Chickpeas</p>
            </Link>
          </div>
          <div className="image-square">
            <Link to="vegetarian-recipe3.html">
              <img data-index="2" img src={vegetarianRecipe3} alt="Vegetarian-Recipe 3"/>
              <div className="label">HIGH IRON</div>
              <p className="square-description">Shortcut Sesame Butter<br/>Noodles</p>
            </Link>
          </div>
          <div className="image-square">
            <Link to="vegetarian-recipe4.html">
              <img data-index="3" img src={vegetarianRecipe4} alt="Vegetarian-Recipe 4"/>
              <div className="label">VEGEY</div>
              <p className="square-description">Roasted Mushroom<br/>Sandwich</p>
            </Link>
          </div>
        </div>
      </div>

      <div id="quick-easy" className="tab-content">
        <div className="image-grid">
          <div className="image-square">
            <Link to="quick-recipe1.html">
              <img data-index="0" img src={quickRecipe1} alt="Quick-Recipe 1"/>
              <div className="label">30 MINS</div>
              <p className="square-description">Coconut Chicken Curry</p>
            </Link>
          </div>
          <div className="image-square">
            <Link to="quick-recipe2.html">
              <img data-index="1" img src={quickRecipe2} alt="Quick-Recipe 2"/>
              <div className="label">25 MINS</div>
              <p className="square-description">Healthy Chicken Mi Goreng</p>
            </Link>
          </div>
          <div className="image-square">
            <Link to="quick-recipe3.html">
              <img data-index="2" img src={quickRecipe3} alt="Quick-Recipe 3"/>
              <div className="label">10 MINS</div>
              <p className="square-description">Cherry Tomato Couscous<br/>Salad</p>
            </Link>
          </div>
          <div className="image-square">
            <Link to="quick-recipe4.html">
              <img data-index="3" img src={quickRecipe4} alt="Quick-Recipe 4"/>
              <div className="label">10 MINS</div>
              <p className="square-description">Mediterranean Chickpea<br/>Salad</p>
            </Link>
          </div>
        </div>
      </div>

      <div id="pinterest" className="tab-content">
        <div className="image-grid">
          <div className="image-square">
            <Link to="pinterest-recipe1.html">
              <img data-index="0" img src={pinterestRecipe1} alt="Pinterest-Recipe 1"/>
              <div className="label">LOW SODIUM</div>
              <p className="square-description">Salmon Quinoa Green<br/>Beans</p>
            </Link>
          </div>
          <div className="image-square">
            <Link to="pinterest-recipe2.html">
              <img data-index="1" img src={pinterestRecipe2} alt="Pinterest-Recipe 2"/>
              <div className="label">HIGH PROTEIN</div>
              <p className="square-description">Garlic Lime Pork With<br/>Farro & Spinach</p>
            </Link>
          </div>
          <div className="image-square">
            <Link to="pinterest-recipe3.html">
              <img data-index="2" img src={pinterestRecipe3} alt="Pinterest-Recipe 3"/>
              <div className="label">LOW CARB</div>
              <p className="square-description">Low Carb Cajun Shrimp<br/>Lettuce Wraps</p>
            </Link>
          </div>
          <div className="image-square">
            <Link to="pinterest-recipe4.html">
              <img data-index="3" img src={pinterestRecipe4} alt="Pinterest-Recipe 4"/>
              <div className="label">DAIRY FREE</div>
              <p className="square-description">Zucchini Noodles with<br/>Sardines</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="cookbook-ad">
          <img src={FFCookbook} alt="FitnessFeast Cookbook" className="cookbook-image" />
        <div className="cookbook-details">
          <h2>get it now!</h2>
          <h3>FITNESSFEAST COOKBOOK</h3>
          <p>The eBook includes our most popular 25 recipes in Link beautiful, easy to download format. Enter your email and we'll send it right over!</p>
          <div className="cb-email-signup">
            <input type="email" placeholder="Enter your email" className="cb-email-input"/>
            <button className="cb-go-button">GO</button>
          </div>
        </div>
      </div>
      <footer>
        <p>&copy; 2024 FitnessFeast. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;