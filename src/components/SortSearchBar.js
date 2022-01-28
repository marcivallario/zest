import { Route, Switch, NavLink } from 'react-router-dom';

function SortSearchBar({ setCuisine } ) 
{

    function handleClick(e){
        setCuisine(e.target.value)
    }

    const cuisineA = ['All', 'Mexican', 'Greek', 'Turkish', 'Japanese', 'American']

    return (
        <div id="sort-bar">
            <div id="sort-bar-list">
                {cuisineA.map((c) =>
                   <NavLink key={c.index} to={`/recipes/${c}`}><button value = {c} onClick={(e)=>handleClick(e)}>{c}</button></NavLink>
                )}
            </div>
        </div>
    )
}
export default SortSearchBar