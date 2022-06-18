// import React from 'react';
import ReactDOM from 'react-dom/client';
// import tachyons from 'tachyons'

import './index.css';
// import App from './old/App';
import Portfolio from './containers/Portfolio'
import FullScreen from "./components/FullScreen";
import { personalData } from './data.js'
import reportWebVitals from './reportWebVitals';

const { name, role } = personalData;

ReactDOM.createRoot(document.getElementById('root')).render(
    <Portfolio>
        <FullScreen>
            <h1>Hello! My name is {name} and I'm a {role}.</h1>
        </FullScreen>
        <FullScreen>
            <h1>This is my portfolio</h1>
        </FullScreen>
    </Portfolio>
    // <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
