function Card({ recipe }) {
    console.log(recipe)
    return (
        <div className="card-container">
            <div className="card-img-container">
                <img src={recipe.picture_url}/>
            </div>
            <div className="card-details">
                <h4>{recipe.cuisine.name}</h4>
                <h6>Ingredients</h6>
                {recipe.ingredients.map(ingredient => <li key={ingredient.id}>{ingredient.name}</li>)}
                <ol>
                    {recipe.directions.map(direction => <li key={direction.id}>{direction.text}</li>)}
                </ol>
                
            </div>
        </div>
    )
}

export default Card