function Banner({ featuredRecipe }) {
    return (
        <div id="home">
            <div id="banner-container">
                <div id="banner-content">
                    <div id="banner-text">
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
            <div id="about">
                <h2>Explore your pantry with curated dishes.</h2>
                <p>At Zest, we believe taste trumps all. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque egestas diam in. Quam elementum pulvinar etiam non quam. Quis commodo odio aenean sed. Augue neque gravida in fermentum et sollicitudin ac orci. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Commodo ullamcorper a lacus vestibulum. Eu tincidunt tortor aliquam nulla facilisi. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. At tellus at urna condimentum mattis pellentesque. Id porta nibh venenatis cras sed. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Quisque id diam vel quam. Pretium aenean pharetra magna ac placerat vestibulum.</p>
                <br></br>
                <p>Facilisi etiam dignissim diam quis enim lobortis. Etiam sit amet nisl purus. Amet nisl purus in mollis nunc. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Morbi tristique senectus et netus et. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Diam vulputate ut pharetra sit amet aliquam id diam. Consectetur purus ut faucibus pulvinar elementum integer. Placerat orci nulla pellentesque dignissim enim. Leo in vitae turpis massa sed elementum tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
    
            </div>
        </div>
    )
}

export default Banner