import FullScreen from "../components/FullScreen";
import ProjectCardList from "../containers/ProjectCardList";
import {Component} from "react";

class PortfolioPage extends Component {
    render() {
        return (
            <FullScreen>
                <h2>Some of my projects:</h2>
                <ProjectCardList/>
            </FullScreen>
        )
    }
}

export default PortfolioPage;