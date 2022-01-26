
import logo from "../assets/logo_test.png"
import { NavLink } from "react-router-dom"

function Header() {


    return (
        <div id="header">
            <nav id="nav">
                <ul id="nav-left">
                    <li>
                        <NavLink
                            to="/" 
                            exact
                            activeStyle={{
                            textDecoration: "underline",
                            }}> 
                        Home
                        </NavLink>
                    </li>
                    <li><a href="#about">Our Philosophy</a></li>
                </ul>
                <div id="nav-img-container">
                    <NavLink
                            to="/" 
                            exact
                            activeStyle={{
                            textDecoration: "underline",
                            }}> 
                        <img id="header-logo" src={logo} alt="logo" title="Zest" />
                        </NavLink>
                </div>
                <ul id="nav-right">
                    <li><NavLink
                            to="/recipes" 
                            exact
                            activeStyle={{
                            textDecoration: "underline",
                            }}> 
                        Recipes
                        </NavLink></li>
                    <li><a href="https://www.kroger.com/food-tips/cooking-skills/101-simple-cooking-tips" target="_blank">Tips</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header