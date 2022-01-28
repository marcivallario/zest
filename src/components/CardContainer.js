import Card from "./Card"

function CardContainer({ recipes, onDelete, updateRecipes }) {
    if (recipes.length !== 0) {
        return (
            <div id="cards-container">
                {recipes.map(recipe => {
                    return (
                        <Card key={recipe.id} recipe={recipe} onDelete={onDelete} updateRecipes={updateRecipes}/>
                    )
                })}
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}

export default CardContainer