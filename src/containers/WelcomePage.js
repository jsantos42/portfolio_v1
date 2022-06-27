import "./WelcomePage.css"
import {Component} from "react";
import {personalData} from "../data";

const {name, role} = personalData;

class WelcomePage extends Component {
    render() {
        return (
            <div className='welcomePage'>
                <h1>Hello! My name is {name} and I'm a {role}.</h1>
            </div>
        )
    }
}

export default WelcomePage;

