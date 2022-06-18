import { Component } from 'react'
import './ProjectCard.css'

const insertLinks = (props) => {
    if (props.live.length !== 0)
        return (
            <p><a href={props.repo}>Repo</a> | <a href={props.live}>Live</a></p>
        );
    else
        return (<a href={props.repo}>Repo</a>);
}

class ProjectCard extends Component {
    render() {
        return (
            <div className='projectcard'>
                <h2>{this.props.title}</h2>
                <img src={this.props.gif}/>
                <p>{this.props.brief}</p>
                <p>Languages: <em>{this.props.languages.join(', ')}</em></p>
                <p>Keywords: <em>{this.props.keywords.join(', ')}</em></p>
                {insertLinks(this.props)}
            </div>
        )
    }
}

{/*      title
                    brief
        gifOnHover  languages
                    keywords
              repo live
            */}

export default ProjectCard;