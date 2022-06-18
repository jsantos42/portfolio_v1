import { Component } from 'react'

class FullScreen extends Component {
    render() {
        return (
            <div style={{height: '100vh'}}>
                {this.props.children}
            </div>
        );
    }
}

export default FullScreen;