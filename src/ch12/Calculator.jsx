import React, {useState} from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

function Calculator(props){
    const [temperature,setTemperature] = useState('');

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }
    let scaleNames;
    return(
        <fieldset>
            <legend>입력하다 섭씨(단위:{scaleNames[props.scale]}):</legend>
            <input type="text"
            value={temperature}
            onChange={handleChange}
            />
            <BoilingVerdict
                celsius={parseFloat(temperature)}/>
        </fieldset>
    )
}
export default Calculator;