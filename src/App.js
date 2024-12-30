import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Advice from './Pages/Advice';
import MealPlans from './Pages/MealPlans';
import Recipes from './Pages/Recipes';
import AllRecipes from './Pages/AllRecipes';
import CreamySilverbeatPasta from './Pages/CreamySilverbeatPasta';
import HerbySummerTart from './Pages/HerbySummerTart';
import PawpawSalad from './Pages/PawpawSalad';
import RecipeOne from './Pages/RecipeOne';
import Bowls from './Pages/Bowls';
import Salads from './Pages/Salads';
import Smoothies from './Pages/Smoothies';
import Wraps from './Pages/Wraps';
import Dinner from './Pages/Dinner';
import Healthy from './Pages/Healthy';
import InstantPot from './Pages/InstantPot';
import QuickEasy from './Pages/QuickEasy';
import Soups from './Pages/Soups';
import StirFry from './Pages/StirFry';
import Vegetarian from './Pages/Vegetarian';
import Vegan from './Pages/Vegan';
import ScrollToTop from './Pages/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/advice" element={<Advice />} />
        <Route path="/creamysilverbeatpasta" element={<CreamySilverbeatPasta />} />
        <Route path="/herbysummertart" element={<HerbySummerTart />} />
        <Route path="/pawpawsalad" element={<PawpawSalad />} />
        <Route path="/recipeone" element={<RecipeOne />} />
        <Route path="/meal-plans" element={<MealPlans />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/all-recipes" element={<AllRecipes />} />
        <Route path="/bowls" element={<Bowls />} />
        <Route path="/salads" element={<Salads />} />
        <Route path="/smoothies" element={<Smoothies />} />
        <Route path="/wraps" element={<Wraps />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/healthy" element={<Healthy />} />
        <Route path="/instant-pot" element={<InstantPot />} />
        <Route path="/meal-plans" element={<MealPlans />} />
        <Route path="/quick-and-easy" element={<QuickEasy />} />
        <Route path="/soups" element={<Soups />} />
        <Route path="/stir-fry" element={<StirFry />} />
        <Route path="/vegetarian" element={<Vegetarian />} />
        <Route path="/vegan" element={<Vegan />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;
