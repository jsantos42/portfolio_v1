import {Component} from "react";
import "./Footer.css"
import Social from "./Social";
import LinkedIn from "../res/linked_in.png";
import Git from "../res/git.png";
import Email from "../res/email.png";
import A from './A'

class Footer extends Component {
    render() {
        return (
            <footer>
                <Social>
                    <A href={'https://www.linkedin.com/in/j-almeidasantos/'}><img src={LinkedIn}/></A>
                    <A href={'https://github.com/jsantos42'}><img src={Git}/></A>
                    <A href={'mailto:j-almeidasantos@hotmail.com'}><img src={Email}/></A>
                </Social>
                <p>© {new Date().getFullYear()} João Almeida Santos</p>
            </footer>
        );
    }
}

export default Footer;