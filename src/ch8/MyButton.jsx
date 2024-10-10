import React from "react";
class MyButton extends React.Component {
    constructor(props) {
        super(props);
        //class field문법
        this.state = { isToggleOn: true }
    }
    handleClick(){
        this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}));
    }
    render() {
        return (
            <button onClick={() => this.handleClick()}>
                My Button{this.state.isToggleOn ? 'On':'Off'}
                </button>
        );
    }
}
export default MyButton;