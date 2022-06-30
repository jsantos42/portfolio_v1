import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import tachyons from 'tachyons'

import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import NotFound from "./components/NotFound";
import NavBar from "./containers/NavBar";
import Footer from "./components/Footer";


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/portfolio" element={<Home />}/>
            <Route path="/portfolio/projects" element={<Projects />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
