import { Component } from 'react'
import './FullScreen.css'

class FullScreen extends Component {
    render() {
        return (
            <div className='fullscreen'>
                {this.props.children}
            </div>
        );
    }
}

export default FullScreen;