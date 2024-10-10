import React from 'react';

//bind대신 클래스 필드 문법으로 변경
class ComfirmButton2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isConfirmed: false
        };

    }
    handleConfirm= () =>{
        this.setState((prevState) => ({isConfirmed: !prevState.isConfirmed}));
    }
    render(){
        return (
          <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
              Confirm Button2{this.state.isConfirmed? "확인됨":"확인하기"}
          </button>
        );
    }
}
export default ComfirmButton2;