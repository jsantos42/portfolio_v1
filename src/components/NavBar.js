import {NavLink} from "react-router-dom";
import {Component} from "react";
import "./NavBar.css"

class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active" : "inactive"}
                                 to={"/projects"}>Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active" : "inactive"}
                                 to={"/about"}>About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;