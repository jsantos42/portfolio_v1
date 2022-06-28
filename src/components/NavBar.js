import {Link, NavLink} from "react-router-dom";
import {Component} from "react";
import "./NavBar.css"
import cv from "../res/CV.pdf"

class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <NavLink className={({isActive}) => isActive ? "active" : "inactive"} to={"/portfolio"} end>
                        <li>Home</li>
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ? "active" : "inactive"} to={"/portfolio/projects"}>
                        <li>Projects</li>
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ? "active" : "inactive"} to={"/portfolio/about"}>
                        <li>About</li>
                    </NavLink>
                    <Link to={cv} target="_blank" download={"Resume Joao Almeida Santos.pdf"}>
                        <li id={"download"}>Download Resume</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default NavBar;