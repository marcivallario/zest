import Card from "./Card"

function CardContainer({ recipes }) {
    if (recipes.length !== 0) {
        return (
            <div id="cards-container">
                {recipes.map(recipe => {
                    return (
                        <Card key={recipe.id} recipe={recipe}/>
                    )
                })}
            </div>
        )
    }
    else {
        return <p>Loading...</p>
    }
}

export default CardContainer