import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import Nav from "./Nav";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import NotFound from "../pages/NotFound";
import Footer from "./Footer";
import {darkTheme, lightTheme} from "../themes";
import {pages} from "../data";
import GlobalStyle from "./GlobalStyle";
import moon from '../res/themeSwitches/moon.png'
import sun from '../res/themeSwitches/sun.png'

const App = () => {
    const [themeData, setThemeData] = useState({
        theme: lightTheme,
        themeSwitcher: moon,
    });

    const switchTheme = () => {
        if (themeData.theme.name === 'light')
            setThemeData({
                theme: darkTheme,
                themeSwitcher: sun,
            });
        else
            setThemeData({
                theme: lightTheme,
                themeSwitcher: moon,
            });
    }

    return (
        <ThemeProvider theme={themeData.theme}>
            <GlobalStyle/>
            <BrowserRouter>
                <Nav themeData={themeData} onSwitchTheme={switchTheme}/>
                <Routes>
                    <Route path={pages.home} element={<Home/>}/>
                    <Route path={pages.projects} element={<Projects/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;