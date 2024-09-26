import React, {useState,useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY=10;

function Accommodate(props){
    const [isFull,setIsFull] = useState(false);
    const [count,increaseCount,decreaseCount] = useCounter(0);

    //Mount 됬을때,Update 되었을때
    useEffect(() => {
        console.log("===================");
        console.log("useEffect 실행됨");
        console.log(`isFull:${isFull}`);
    });
    useEffect(() => {
        setIsFull(count>=MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    },[count]);
    return(
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>수용시설 입장</button>
            <button onClick={decreaseCount}>수용시설 퇴장</button>
            {isFull && <p style={{color: "red"}}>정원이 꽉찼습니다.</p>}
        </div>
    );
}

export default Accommodate;