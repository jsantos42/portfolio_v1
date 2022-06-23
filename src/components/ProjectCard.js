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
				<p className='links'><a href={this.props.repo}>Repository</a> | <a href={this.props.live}>Live</a></p>
			);
		else
			return (<p className='links'><a href={this.props.repo}>Repository</a></p>);
	}

	render() {
		return (
			<div className='projectCard'>
				<h2>{this.props.title}</h2>
				<div>
					<p><strong>{this.props.brief}</strong></p>
					 <p>Languages: <strong>{this.props.languages.join(', ')}</strong></p>
					 <p>Keywords: <em>{this.props.keywords.join(', ')}</em></p>
					 {this.insertLinks()}
				</div>
				<img src={this.state.imgSrc} onMouseEnter={this.switchToGif} onMouseLeave={this.switchToStatic}/>
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