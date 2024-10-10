//클릭 이벤트 처리
//클릭하면 알림창 표시
import {useState} from "react";

function ClickButton() {
     const [isToggleOn ,setIsToggleOn] = useState(true);
    function handleClick() {
            alert("뭉탱이 월드")
            setIsToggleOn((isToggleOn) => !isToggleOn);
        }
    return (
        <button onClick={handleClick}>
            아니 그냥 있다가 유리게슝 {isToggleOn? "켜짐":"꺼짐"}
        </button>
    );
}
export default ClickButton;