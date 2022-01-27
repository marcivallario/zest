import { Route, Switch, NavLink } from 'react-router-dom';

function SortSearchBar({ setCuisine } ) 
{

    function handleClick(e){
        setCuisine(e.target.value)
        console.log(e.target.value)
    }

    const cuisineA = ['All', 'Mexican', 'Greek', 'Turkish', 'Japanese', 'American']

    return (
        <div id="sort-bar">
            <ul id="sort-bar-list">
                {cuisineA.map((c) =>
                    <li><NavLink key={c.index} to={`/recipes/${c}`}><button value = {c} onClick={(e)=>handleClick(e)}>{c}</button></NavLink></li>
                )}
            </ul>
        </div>
    )
}
export default SortSearchBar