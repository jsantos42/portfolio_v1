import "./Home.css"
import {Component} from "react";
import {personalData} from "../data";
import MainAvatar from "../res/undraw_shared_workspace_re_3gsu.png"

const {name, currentRole, newRole} = personalData;

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <em><h2>(As you can see, this homepage is still in construction!</h2>
                <h2>But you can check the Projects one, or download my resume)</h2></em>
                <h1>Hello!</h1>
                <img src={MainAvatar}/>
                <h1>I'm a {currentRole} with a strong interest in Frontend.</h1>
            </div>
        )
    }
}

export default Home;

