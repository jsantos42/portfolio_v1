import FullScreen from "../components/FullScreen";
import ProjectCardList from "../containers/ProjectCardList";
import {Component} from "react";

class PortfolioPage extends Component {
    render() {
        return (
            <FullScreen>
                <h1>Some of my projects:</h1>
                <ProjectCardList/>
            </FullScreen>
        )
    }
}

export default PortfolioPage;