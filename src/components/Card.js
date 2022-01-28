import trashcan from '../assets/trashcan.png'

function Card({ recipe, onDelete, updateRecipes }) {

    function handleDelete() {
        fetch(`http://localhost:9292/recipes/${recipe.id}`, {
            method: 'DELETE'
            })
        .then(onDelete(recipe.id));
    }

    function handleChange(e) {
        fetch(`http://localhost:9292/recipes/${recipe.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                rating: e.target.value
            }),
            })
        .then((r) => r.json())
        .then(updateRecipes);
    }

    console.log('Card: ', recipe)

    return (
        <div className="card-container">
            <div className="card-img-container">
                <img src={recipe.picture_url}/>
            </div>
            <div className="card-details">
                <div className="recipe-details">
                    <div className="titles">
                        <h2>{recipe.name}</h2>
                        <h4>{recipe.cuisine.name}</h4>
                    </div>
                    <div className="card-options">
                        <div className="rating">
                            <label>Rating: </label>
                        <select value={recipe.rating} name="rating" onChange={handleChange}>
                            <option value={1}>⭐</option>
                            <option value={2}>⭐⭐</option>
                            <option value={3}>⭐⭐⭐</option>
                            <option value={4}>⭐⭐⭐⭐</option>
                            <option value={5}>⭐⭐⭐⭐⭐</option>
                        </select>
                        </div>
                        <img className="trash" src={trashcan} title="Delete recipe" onClick={handleDelete}/>
                    </div>
                    <div className="ingredients">
                        <h6>Ingredients</h6>
                    {recipe.ingredients.map(ingredient => {
                        return (<li key={ingredient.id}>{recipe.ingredient_lists.find(list => list.ingredient_id === ingredient.id).quantity}{ingredient.name}</li>)
                    })}
                    </div>
                    <div className="instructions">
                        <h6>Directions</h6>
                        <ol>
                            {recipe.directions.map(direction => <li key={direction.id}>{direction.text}</li>)}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card