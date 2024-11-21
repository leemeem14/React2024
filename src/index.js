import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ComfirmButton from "./ch8/ComfirmButton";
import ComfirmButton2 from "./ch8/ComfirmButton2";
import ComfirmButton3 from "./ch8/ComfirmButton3";
import Greeting from "./ch9/Greeting";
import LoginControl from "./ch9/LoginControl";
import MailBox from "./ch9/MailBox";
import LoginControl2 from "./test/LoginControl2";
import Toolbar from "./ch9/ToolBar";
import LandingPage from "./ch9/LandingPage";
import AppNumberList from "./ch10/AppNumberList";
import StudentAttendance from "./ch10/StudentAttendance";
import AppStudentAttendance from "./ch10/AppStudentAttendance";
import AttendanceCard from "./ch10/avatarAttendance/AttendanceCard";
import NameForm from "./ch11/NameForm";
import RequestForm from "./ch11/RequestForm";
import NameRequestForm from "./ch11/NameRequestForm";
import SignUpForm from "./ch11/SignUpForm";


const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(()=> {
        root.render(
            <React.StrictMode>
               {/*<LoginControl2 isLoggedIn={true}/>*/}
            {/*<Toolbar/>*/}
                <SignUpForm/>
            </React.StrictMode>

            , 1000
        );
    }
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
