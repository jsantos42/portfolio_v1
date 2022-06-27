import "./WelcomePage.css"
import {Component} from "react";
import {Link} from "react-router-dom";
import {personalData} from "../data";
import NavBar from "../components/NavBar";

const {name, role} = personalData;

class WelcomePage extends Component {
    render() {
        return (
            <div className='welcomePage'>
                <NavBar />
                <h1>Hello! My name is {name} and I'm a {role}.</h1>
            </div>
        )
    }
}

export default WelcomePage;

