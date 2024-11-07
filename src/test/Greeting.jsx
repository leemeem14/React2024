import React from "react";
import {UserGreeting, GuestGreeting} from "./UserGuestGreeting";

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>
}
export default Greeting