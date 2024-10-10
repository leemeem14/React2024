import React, {useState} from "react";

function Counter() {
    const[count,setCount] = useState(0);
    function handleCount(){
        setCount(prevCount => prevCount + 1);
    }
    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={handleCount}>
                1씩증가
            </button>
        </div>
    );
}
export default Counter;