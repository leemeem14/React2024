import React from "react";

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return<p>물 는 끓다.</p>
    }
    return <p>물 는 아니다 끓다.</p>
}
export default BoilingVerdict;