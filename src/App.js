import Header from './components/Header';
import Banner from './components/Banner';
import SortSearchBar from './components/SortSearchBar';
import CardContainer from './components/CardContainer';
import About from './components/About';

import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [ recipes, setRecipes ] = useState([]);
  const [ selectedCuisine, setCuisine ] = useState('All');
  const [ featuredRecipe, setFeaturedRecipe ] = useState({
        id: null,
        name: '',
        picture_url: '',
        cuisine: '',
        directions: [],
        ingredients: []
    })

  useEffect(() => {
  fetch("http://localhost:9292/recipes")
    .then((r) => r.json())
    .then((recipes) => setRecipes(recipes));
  }, []);

  useEffect(() => {
      if (recipes.length !== 0) {
        setFeaturedRecipe(recipes[Math.floor(Math.random() * recipes.length)])
      }
    }, [recipes]);

  function onDelete(recipeToDeleteId) {
    setRecipes(recipes.filter(recipe => recipe.id !== recipeToDeleteId));
  }

  function updateRecipes(updatedRecipe) {
    const updatedArr = recipes.map(recipe => {
      if (recipe.id === updatedRecipe.id) {
        return updatedRecipe;
      } else {
        return recipe;
      }
    });
    setRecipes(updatedArr);
  }


  const filteredRecipes = recipes.filter((r) => {
    if (selectedCuisine === "All")
      return true;
    return r.cuisine.name.toLowerCase() === selectedCuisine.toLowerCase();
  });

  return (
    <div>
      <Header />
     
      <Switch>
        <Route path="/recipes">
          <SortSearchBar setCuisine={setCuisine}/>
          <CardContainer recipes={filteredRecipes} onDelete={onDelete} updateRecipes={updateRecipes}/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/">
          <Banner featuredRecipe={featuredRecipe}/>
        </Route>
      </Switch>
    </div>
    
  );
}


export default App;
