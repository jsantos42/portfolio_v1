import {Component} from 'react'
import './ProjectCard.css'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {imgSrc: this.props.static}
        this.insertLive = this.insertLive.bind(this);
    }

    insertLive() {
        if (this.props.live.length !== 0)
            return (
                <span> | <a href={this.props.live}>Live</a></span>
            );
    }

    render() {
        return (
            <div className='card'>
                <h2>{this.props.title}</h2>
                <div className='cardContent'>
                    <img src={this.props.gif} />
                    <div className='cardText'>
                        <p><strong>{this.props.brief}</strong></p>
                        <p>Languages: <strong>{this.props.languages.join(', ')}</strong></p>
                        <p className='cardLinks'><a href={this.props.repo}>Repository</a>{this.insertLive()}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;