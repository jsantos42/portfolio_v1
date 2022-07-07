import "./Home.css"
import {Component} from "react";
import {personalData} from "../data";
import Programmer from "../res/undraw_shared_workspace_re_3gsu.png"
import Doctor from "../res/undraw_doctor_kw5l.png"
import Highlight from "../components/Highlight";
import Me from "../res/me.png"

const {name, currentRole, newRole} = personalData;

class Home extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <div className='home'>
                <h1>Junior Software Engineer</h1>
                {/*<img src={Doctor}/>*/}
                <img src={Programmer}/>
                <div className='about'>
                    <h2>About Me:</h2>
                    <ul>
                        <li>background in <Highlight>Medicine</Highlight></li>
                        <li><Highlight>6+ years</Highlight> of clinical practice</li>
                        <li>worked in <Highlight>2 countries</Highlight> (PT and FR)</li>
                        <li>frustrated by the <Highlight>poor UX</Highlight> of healthcare software</li>
                        <li>decided to <Highlight>change</Highlight> that, switched to programming</li>
                        <li>long term <Highlight>goal</Highlight>: help rebuilding our NHS software</li>
                        <li>for now, willing to work on <Highlight>any</Highlight> field</li>
                        <li>highly <Highlight>curious</Highlight> and <Highlight>motivated</Highlight> individual</li>
                        <li>sensitive to <Highlight>UX</Highlight> and <Highlight>UI</Highlight> design/aesthetics</li>
                        <li>worship <Highlight>Sir Jony Ive</Highlight></li>
                    </ul>
                </div>
                <div className='more'>
                    <h2>Interested?</h2>
                    <h2>Check my projects!</h2>
                {/*    <img src={Me}/>*/}
                {/*    <button>Contact Me (this button still doesn't work!)</button>*/}
                </div>
            </div>
        )
    }
}

export default Home;

