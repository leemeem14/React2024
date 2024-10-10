import React from 'react';

class ComfirmButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isConfirmed: false
        };
        this.handleConfirm = this.handleConfirm.bind(this);
    }
    handleConfirm(){
        this.setState((prevState) => ({isConfirmed: !prevState.isConfirmed}));
    }
    render(){
        return (
          <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
              Confirm Button{this.state.isConfirmed? "확인됨":"확인하기"}
          </button>
        );
    }
}
export default ComfirmButton;