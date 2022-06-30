import {Link, NavLink} from "react-router-dom";
import cv from "../res/CV.pdf";

const NavList = ({action, mobile, open}) => {
    return (
        // this className attribution needs refactoring and uniformization
        <ul onClick={action}
            className={`${mobile ? "mobile-nav" : "desktop-nav"} ${open ? "" : "closed"}`}>
            <NavLink className={({isActive}) => isActive ? "active" : "inactive"} to={"/portfolio"} end>
                <li>Home</li>
            </NavLink>
            <NavLink className={({isActive}) => isActive ? "active" : "inactive"}
                     to={"/portfolio/projects"}>
                <li>Projects</li>
            </NavLink>
            {/*this Button needs to become a separate component*/}
            <Link to={cv} target="_blank" download={"Resume Joao Almeida Santos.pdf"}>
                <li id={"download"}>Download Resume</li>
            </Link>
        </ul>

    )
}

export default NavList;