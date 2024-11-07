import React, {useState} from "react";
import Toolbar from "./ToolBar";

function LandingPage(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return(
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}/>
            <div style={{padding:16}}>정수캠퍼스와 함께하는 리액트 공부(즐겁다)</div>
        </div>
    );
}

export default LandingPage