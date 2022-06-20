import {Component} from 'react'
import './ProjectCard.css'


class ProjectCard extends Component {
	constructor(props) {
		super(props);
		this.state = {imgSrc: this.props.static}
		this.switchToGif = this.switchToGif.bind(this);
		this.switchToStatic = this.switchToStatic.bind(this);
		this.insertLinks = this.insertLinks.bind(this);
	}

	switchToGif() {
		this.setState({imgSrc: this.props.gif})
	}

	switchToStatic() {
		this.setState({imgSrc: this.props.static})
	}

	insertLinks() {
		if (this.props.live.length !== 0)
			return (
				<p><a href={this.props.repo}>Repo</a> | <a href={this.props.live}>Live</a></p>
			);
		else
			return (<a href={this.props.repo}>Repo</a>);
	}

	render() {
		return (
			<div className='projectcard'>
				<h2>{this.props.title}</h2>
				<img src={this.state.imgSrc} onMouseEnter={this.switchToGif} onMouseLeave={this.switchToStatic}/>
				<p>{this.props.brief}</p>
				<p>Languages: <em>{this.props.languages.join(', ')}</em></p>
				<p>Keywords: <em>{this.props.keywords.join(', ')}</em></p>
				{this.insertLinks()}
			</div>
		)
	}
}

{/*      title
                    brief
        gifOnHover  languages
                    keywords
              repo live
            */
}

export default ProjectCard;