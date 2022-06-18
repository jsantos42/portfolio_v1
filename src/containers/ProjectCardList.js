import {Component} from "react";
import ProjectCard from "../components/ProjectCard";
import "./ProjectCardList.css"
import {projects} from "../data";

class ProjectCardList extends Component {
    constructor() {
        super();
        this.CardArray = projects.map(i =>
            <ProjectCard
                title={i.title}
                brief={i.brief}
                languages={i.languages}
                keywords={i.keywords}
                repo={i.repo}
                live={i.live}
                gif={i.gif}
                description={i.description}
            />);
    }
    render() {
        console.log(this.CardArray);
        return (
            <div className='projectCardList'>
                {this.CardArray}
            </div>
        );
    }
}

export default ProjectCardList;