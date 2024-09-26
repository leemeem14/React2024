import React from "react";
import "./Notification1.css"

// const styles={
//     wrapper:{
//         margin : 8,
//         padding : 8,
//         display : "flex",
//         flexDirection: "row",
//         border: "1px solid grey",
//         borderRadius: 16,
//     },
//     messageText:{//문자열 스타일
//         color: "magenta",
//         fontsize: 16,
//     },
// }

class Notification extends React.Component{
    constructor(props) {
        super(props);//컴포넨트가 생성될떄 프롭을 전달받을수 있는 매개변수를 갖는 생성자 호출
        this.state={};
    }
    componentDidMount() {
        console.log(`${this.props.id}:componentDidMount() called`);
    }
    componentDidUpdate() {
        console.log(`${this.props.id}: componentDidUpdate() called`);
    }
    componentWillUnmount() {
        console.log(`${this.props.id}: componentWillUnmount() called`);
    }

    render() {
        return(
            <div className="wrapper">
                <span className="messageText">
                    {this.props.message}
                </span>
            </div>
        );
    }
}
export default Notification;