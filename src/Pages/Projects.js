import CardList from "../containers/CardList";
import {Component} from "react";
import {projects} from "../data";
import Card from "../components/Card";

class Projects extends Component {
    constructor() {
        super();
        this.CardArray = projects.map(i =>
            <Card
                title={i.title}
                static={i.static}
                gif={i.gif}
                brief={i.brief}
                languages={i.languages}
                keywords={i.keywords}
                repo={i.repo}
                live={i.live}
                description={i.description}
            />);
    }

    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <CardList>
                {this.CardArray}
            </CardList>
        )
    }
}

export default Projects;