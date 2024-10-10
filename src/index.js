import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ComfirmButton from "./ch8/ComfirmButton";
import ComfirmButton2 from "./ch8/ComfirmButton2";
import ComfirmButton3 from "./ch8/ComfirmButton3";


const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(()=> {
        root.render(
            <React.StrictMode>
               <ComfirmButton3/>
            </React.StrictMode>

            , 1000
        );
    }
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
