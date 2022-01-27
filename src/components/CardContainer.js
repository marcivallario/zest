import Card from "./Card"

function CardContainer({ recipes, onDelete }) {
    if (recipes.length !== 0) {
        return (
            <div id="cards-container">
                {recipes.map(recipe => {
                    return (
                        <Card key={recipe.id} recipe={recipe} onDelete={onDelete}/>
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