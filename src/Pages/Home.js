import "./PageStyling.css"
import {Component} from "react";
import {personalData} from "../data";
import MainAvatar from "../res/undraw_shared_workspace_re_3gsu.png"

const {name, currentRole, newRole} = personalData;

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <h1>Hello!</h1>
                <img src={MainAvatar}/>
                <h1>I'm a {currentRole} with a strong interest in Frontend.</h1>
                <p></p>
                <h2><em>As you can see, this home page is still in construction! Please go ahead and view the Projects one, or download my resume</em></h2>
            </div>
        )
    }
}

export default Home;

