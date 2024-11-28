import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Calculator from "./ch12/Calculator";
import TemperatureInput from "./ch12/TemperatureInput";
import Calculator2 from "./ch12/Calculator2";
import Calculator3 from "./ch12/Calculator3";
import DistanceConverter from "./ch12/distance/DistanceConverter";


const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(()=> {
        root.render(
            <React.StrictMode>
                <DistanceConverter/>
            </React.StrictMode>

            , 1000
        );
    }
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
