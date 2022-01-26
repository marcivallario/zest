import Header from './components/Header';
import Banner from './components/Banner';
import SortSearchBar from './components/SortSearchBar';
import CardContainer from './components/CardContainer';

import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [ recipes, setRecipes ] = useState([]);
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

  return (
    <Switch>
      <Route exact path="/recipes">
        <Header />
        <SortSearchBar />
        <CardContainer recipes={recipes}/>
      </Route>
      <Route exact path="/">
        <Header />
        <Banner featuredRecipe={featuredRecipe}/>
      </Route>
    </Switch>
  );
}

export default App;
