import {Link, NavLink} from "react-router-dom";
import cv from "../../res/CV.pdf";
import {pages} from "../../data";

const NavList = ({action, mobile, open, theme}) => {
    return (
        // this className attribution needs refactoring and uniformization
        <ul onClick={action}
            className={`${mobile ? "mobile-nav" : "desktop-nav"} ${open ? "" : "closed"}`}
            style={{background: theme.body.background}}
        >
            <NavLink className={({isActive}) => isActive ? "active" : "inactive"} to={pages.home} end>
                <li>Home</li>
            </NavLink>
            <NavLink className={({isActive}) => isActive ? "active" : "inactive"}
                     to={pages.projects}>
                <li>Projects</li>
            </NavLink>
            {/*this Button needs to become a separate component*/}
            <Link to={cv} target="_blank" download={"Resume_Joao_Almeida_Santos.pdf"}>
                <li id={"download"}>Download Resume</li>
            </Link>
        </ul>
    )
}

export default NavList;