import {Component} from "react";
import Card from "../components/Card";
import {projects} from "../data";

class CardList extends Component {
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
        this.CardListStyle = {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '7em',
            padding: '4em 0'
        }
    }

    render() {
        return (
            <div style={this.CardListStyle}>
                {this.CardArray}
            </div>
        );
    }
}

export default CardList;