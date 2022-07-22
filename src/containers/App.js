import {Component} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import Body from "./Body";
import NavBar from "./NavBar";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import NotFound from "../components/NotFound";
import Footer from "./Footer";
import {darkTheme, lightTheme} from "../themes";
import './App.css';
import GlobalStyle from "./GlobalStyle";

// import {darkTheme} from "../themes";

class App extends Component {
    constructor() {
        super();
        this.state = {
            theme: darkTheme,
        }
    }

    switchTheme = () => {

    }

    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <GlobalStyle/>
                    <BrowserRouter>
                        <Body>
                            <NavBar onSwitchTheme={this.switchTheme}/>
                            <Routes>
                                <Route path="/portfolio" element={<Home/>}/>
                                <Route path="/portfolio/projects" element={<Projects/>}/>
                                <Route path="*" element={<NotFound/>}/>
                            </Routes>
                            <Footer/>
                        </Body>
                    </BrowserRouter>
            </ThemeProvider>
        )
    }

}

export default App;