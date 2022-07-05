import {Component} from "react";

class A extends Component {
    constructor({href}) {
        super({href});
    }

    render() {
        return <a
            href={this.props.href}
            rel={'noreferrer'}
            target={'_blank'}
        >{this.props.children}</a>
    }
}

export default A;