import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import tachyons from 'tachyons'

import './index.css';
import reportWebVitals from './reportWebVitals';
import WelcomePage from "./containers/WelcomePage";
import Projects from "./containers/Projects";


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<WelcomePage />}/>
            <Route path="/projects" element={<Projects />}/>
            {/*{<AboutMe/>}*/}
            {/*    ABOUT ME with chrono */}
        </Routes>
    </BrowserRouter>

    // <Website/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
