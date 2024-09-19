import React from "react";
import Notification from "./Notification";


const reservedNotifications = [
    {
        message:"오늘할건"
    },
    {
        message:"수업듣고"
    },
    {
        message: "배운거 커밋후 집갑시다ㅏㅏㅏㅏ"
    },
];

var timer;
class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications : [],
        };
    }
    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() =>{
            if (notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                clearInterval(timer);
            }
        },2000);
    }

    componentWillUnmount(){
    if(timer){
        clearInterval(timer);
    }
}

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification message = {notification.message}/>;
                })}
            </div>
        );
    }
}
export default NotificationList;