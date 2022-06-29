import {Link, NavLink} from "react-router-dom";
import {Component} from "react";
import "./NavBar.css"
import cv from "../res/CV.pdf"
import {Hamburger} from "../components/Hamburguer";
import NavList from "../components/NavList";

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            mobile: true,
            open: false,
        }
        this.toggleMobile = this.toggleMobile.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleMobile() {
        if (window.innerWidth < 470) {
            this.setState({mobile: true});
            this.setState({open: false});
        }
        else {
            this.setState({mobile: false});
            this.setState({open: true});
        }
    }

    toggleOpen() {
        if (this.state.open)
           this.setState({open: false});
        else
            this.setState({open: true});
    }

    componentDidMount() {
        if (window.innerWidth > 470) {
            this.setState({mobile: false});
            this.setState({open: true});
        }
        window.addEventListener("resize", this.toggleMobile);
        // window.addEventListener("resize", this.toggleNav); for button
    }

    render() {
        // if (this.state.mobileScreen) {
        //     // return (
        //     // )
        // }
        // else {
        console.log(this.state.open);
            return (
                <nav>
                    <Hamburger action={this.toggleOpen} mobile={this.state.mobile} />
                    <NavList action={this.toggleOpen} mobile={this.state.mobile} open={this.state.open}/>
                    {/* download button */}
                </nav>
            );
        // }
    }
}

export default NavBar;