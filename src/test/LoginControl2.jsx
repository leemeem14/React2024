import React from "react";
import {useState} from "react";
import {UserGreeting, GuestGreeting} from "./UserGuestGreeting";
import Greeting from "../test/Greeting";
import LogoutButton from "../ch9/LogoutButton";
import LoginButton from "../ch9/LoginButton";
import WarningBanner from "../ch9/WarningBanner";


function LoginControl2(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }



    return(
        <div>
            <WarningBanner warning={true}/>
            <Greeting isLoggedIn={isLoggedIn}/>
            {isLoggedIn ? <LogoutButton onClick={handleLogoutClick}/> : <LoginButton onClick={handleLoginClick}/>}
        </div>
    );
}
export default LoginControl2