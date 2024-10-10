import React, {useState} from 'react';
import {render} from "@testing-library/react";

//bind대신 클래스 필드 문법으로 변경
function ComfirmButton3(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    function handleConfirm() {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    }
        return (
            <button onClick={handleConfirm} disabled={isConfirmed}>
                Confirm Button3{isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );

}
export default ComfirmButton3;