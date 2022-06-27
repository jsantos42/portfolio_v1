import {Component} from "react";
import "./NotFound.css"

class NotFound extends Component {
    render() {
        return (
            <div className='NotFound'>
                <p><strong>404 NOT FOUND</strong></p>
                <p>This page does not exist.</p>
            </div>
        )
    }
}

export default NotFound;