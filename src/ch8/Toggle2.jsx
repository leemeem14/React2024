import {useState} from "react";
function Toggle2() {
    const [isToggleOn ,setIsToggleOn] = useState(true);

    //first method 함수 컴포넌트 내에 함수로 정의
    // function handleClick() {
    //     setIsToggleOn((isToggleOn) => !isToggleOn);
    // }

    //Second Method 애로우함수(익명함수)

    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }
        return (
            <button onClick={handleClick}>
                뭉탱이 월드{isToggleOn? "켜짐":"꺼짐"}
            </button>
        );
    }

export default Toggle2;