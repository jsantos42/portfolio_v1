import {NavLink} from "react-router-dom";
import {Component} from "react";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <li>© {new Date().getFullYear()} João Almeida Santos</li>
                </ul>
            </footer>
        );
    }
}

export default Footer;