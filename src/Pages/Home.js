import "./Home.css"
import {Component} from "react";
import {personalData} from "../data";
import Programmer from "../res/undraw_shared_workspace_re_3gsu.png"
import Doctor from "../res/undraw_doctor_kw5l.png"
import Highlight from "../components/Highlight";
import A from '../components/A'
import Me from "../res/me.png"
import {Link} from "react-router-dom";

const {name, currentRole, newRole} = personalData;

class Home extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }

    render() {
        return (
            <div className='home'>
                <h1>{personalData.role}</h1>
                {/*<img src={Doctor}/>*/}
                <img src={Programmer}/>
                <div className='about'>
                    <h2>About Me:</h2>
                    <ul>
                        <li>background in <Highlight>Medicine</Highlight></li>
                        <li><Highlight>6+ years</Highlight> of clinical practice</li>
                        <li>worked in <Highlight>2 countries</Highlight> (PT and FR)</li>
                        <li>frustrated by the <Highlight>poor UX</Highlight> of healthcare software</li>
                        <li>did a <Highlight>datascience</Highlight> project involving <Highlight>GIS</Highlight></li>
                        <li>thrilled, enrolled at <Highlight>42</Highlight> to become a programmer</li>
                        <li>highly <Highlight>curious</Highlight> and <Highlight>motivated</Highlight> individual</li>
                        <li>sensitive to <Highlight>UX</Highlight> and <Highlight>UI</Highlight> design/aesthetics</li>
                        <li>worship <A href={'https://en.wikipedia.org/wiki/Jony_Ive'}><Highlight>Sir Jony
                            Ive</Highlight></A></li>
                    </ul>
                    <h2>Currently:</h2>
                    <ul>
                        <li>finishing a FullStack course on Udemy</li>
                        <li>doing some <Highlight>front-end</Highlight> and <Highlight>datascience</Highlight> projects</li>
                    </ul>
                </div>
                <div className='more'>
                    <h2>Interested?</h2>
                    <h2>Check my <Link style={{textDecoration: 'underline'}} to={"/portfolio/projects"}>projects</Link>!</h2>
                    {/*    <img src={Me}/>*/}
                    {/*    <button>Contact Me (this button still doesn't work!)</button>*/}
                </div>
            </div>
        )
    }
}

export default Home;

