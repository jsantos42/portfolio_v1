import ProjectCardList from "../containers/ProjectCardList";
import {Component} from "react";

class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Some of my projects:</h2>
                <ProjectCardList/>
            </div>
        )
    }
}

export default Projects;