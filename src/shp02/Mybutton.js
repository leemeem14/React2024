

function Mybutton(props){
    const [isClicked,setIsClicked]= React.useState(false);
    return React.createElement(
        "button",{
        onclick:()=>setIsClicked()},
    isClicked ? 'Clicked' : 'Click Here')
}

const domContainer = document.querySelector('#root')
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(Mybutton));