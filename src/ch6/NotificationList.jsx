import React from "react";
import Notification from "./Notification";


const reservedNotifications = [
    {
        id:1,
        message:"오늘할건"
    },
    {
        id:2,
        message:"수업듣고"
    },
    {
        id:3,
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
                this.setState({
                    notifications:[],
                })
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
                    return <Notification
                        key={notification.id}
                        id={notification.id}
                        message = {notification.message}/>;
                })}
            </div>
        );
    }
}
export default NotificationList;