import {Component} from "react";
import Hamburger from "../components/Hamburguer";
import Title from "../components/Title";
import NavList from "../components/NavList";
import {personalData} from "../data";
import "./NavBar.css"
import ThemeSwitcher from "../components/ThemeSwitcher";


class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            mobile: true,
            open: false,
        }
        this.mobileThreshold = 768;
        this.toggleMobile = this.toggleMobile.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleMobile() {
        if (window.innerWidth < this.mobileThreshold) {
            this.setState({mobile: true});
            this.setState({open: false});
        } else {
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
        if (window.innerWidth > this.mobileThreshold) {
            this.setState({mobile: false});
            this.setState({open: true});
        }
        window.addEventListener("resize", this.toggleMobile);
    }

    render() {
        return (
            <nav style={{background: this.props.theme.body.background}}>
                <Title>{personalData.name}</Title>
                <ThemeSwitcher src={this.props.themeSwitcher} onClick={this.props.onSwitchTheme}/>
                <Hamburger action={this.toggleOpen} mobile={this.state.mobile} theme={this.props.theme}/>
                <NavList action={this.toggleOpen} mobile={this.state.mobile} open={this.state.open} theme={this.props.theme}>
                    {/* download button */}
                </NavList>
            </nav>
        );
    }
}

export default NavBar;