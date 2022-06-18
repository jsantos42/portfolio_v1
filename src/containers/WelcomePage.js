import FullScreen from "../components/FullScreen";
import {Component} from "react";
import {personalData} from "../data";

const { name, role } = personalData;

class WelcomePage extends Component {
    render() {
        return (
            <FullScreen>
                <h1>Hello! My name is {name} and I'm a {role}.</h1>
            </FullScreen>
        )
    }
}
export default WelcomePage;

