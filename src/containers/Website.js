import { Component } from "react";
import WelcomePage from "./WelcomePage";
import PortfolioPage from "./PortfolioPage";

class Website extends Component {
    render() {
        return (
            <div>
                <WelcomePage/>
                <PortfolioPage/>
                {/*<AboutMe/>*/}
                {/*    ABOUT ME with chrono */}
            </div>
    );
    }
}

export default Website;