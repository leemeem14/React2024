import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ch4/Button.css'
import './ch3/Book.css'
import './ch4Clock/Clockstyle.css'

import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from "./ch3/Library";
import Button from "./ch4/Button";
import ConfirmDialog from "./ch4/ConfirmDialog";
import Clock from "./ch4Clock/Clock";

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(()=> {
        root.render(
            <React.StrictMode>
                <Clock/>

            </React.StrictMode>

            , 1000
        );
    }
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
