import Header from './components/Header';
import Banner from './components/Banner';
import SortSearchBar from './components/SortSearchBar';
import CardContainer from './components/CardContainer';

import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [ recipes, setRecipes ] = useState([]);
  let featuredRecipe = {
        id: null,
        name: '',
        picture_url: '',
        cuisine: '',
        directions: [],
        ingredients: []
    }
  // const [ featuredRecipe, setFeaturedRecipe ] = useState({
  //       id: null,
  //       name: '',
  //       picture_url: '',
  //       cuisine: '',
  //       directions: [],
  //       ingredients: []
  //   })

  useEffect(() => {
  fetch("http://localhost:9292/recipes")
    .then((r) => r.json())
    .then((recipes) => setRecipes(recipes));
  }, []);

  useEffect(() => {
      if (recipes.length !== 0) {
        featuredRecipe = recipes[Math.floor(Math.random() * recipes.length)]
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
    console.log("Updated Array: ", updatedArr)
    setRecipes(updatedArr);
  }

  console.log('App: ', recipes)

  return (
    <Switch>
      <Route exact path="/recipes">
        <Header />
        <SortSearchBar />
        <CardContainer recipes={recipes} onDelete={onDelete} updateRecipes={updateRecipes}/>
      </Route>
      <Route exact path="/">
        <Header />
        <Banner featuredRecipe={featuredRecipe}/>
      </Route>
    </Switch>
  );
}

export default App;
