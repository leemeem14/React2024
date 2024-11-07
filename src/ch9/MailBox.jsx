import React from "react";

function MailBox(props) {
    const UnreadMessages = props.UnreadMessages;

    return(
      <div>
          <h1>안녕하세요.</h1>
          {UnreadMessages.length > 0 &&
          <h2>
              현재 {UnreadMessages.length}개의 잃지 않은 메세지가 있습니다.
          </h2>
          }
      </div>
    );
}
export default MailBox