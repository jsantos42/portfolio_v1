import {Component} from 'react'
import A from './A'
import './Card.css'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {imgSrc: this.props.static}
        this.insertLive = this.insertLive.bind(this);
    }

    insertLive() {
        if (this.props.live.length !== 0)
            return (
                <span> | <A href={this.props.live}>Live</A></span>
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
                        <p>Stack: <strong>{this.props.languages.join(', ')}</strong></p>
                        <p className='cardLinks'><A href={this.props.repo}>Repository</A>{this.insertLive()}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;