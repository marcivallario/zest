import About from "./About"

function Banner({ featuredRecipe }) {
    return (
        <div id="home">
            <div id="banner-container">
                
            </div>
            <div id="rotd-container">
                <div id="rotd-content">
                    <div id="rotd-text">
                        <h2>Recipe of the Day: {featuredRecipe.name}</h2>
                        <div id="featured-details">
                            <div id="featured-ingredients">
                                <h6>Ingredients</h6>
                                <ul>
                                    {featuredRecipe.ingredients.map(ingredient => <li key={ingredient.id}>{ingredient.name}</li>)}
                                </ul>
                            </div>
                            <div id="featured-instructions">
                                <h6>Instructions</h6>
                                <ol>
                                    {featuredRecipe.directions.map(direction => {
                                        return (<li key={direction.text}>{direction.text}</li>)
                                    })}
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div id="banner-img-container">
                        <img src={featuredRecipe.picture_url} alt="Receipe of the Day" title="Recipe of the Day" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner