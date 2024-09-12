import React from "react";
import Comment from "./Comment";
import comment from "./Comment";
// import styles from "./Comment";
// import comment from "./Comment";
const comments = [
    {
        name :"이영훈",
        comment : "낚시 잘보고와라",
    },
    {
        name : "엄준식",
        comment : "할게없다",
    },
    {
        name : "홍진호",
        comment : "메이플2 언제 섭종함?",
    },
]
function CommentList(props){
    return(
        // <div style={styles.contentContainer}>
        //     <span style={styles.nameText}>{props.name}</span>
        //     <span style={styles.commentText}>{props.comment}</span>
        // </div>
        <div>
            {
                comments.map((comment) =>{
                    return (
                        <Comment name={comment.name} comment={comment.comment}/>
                    )
                })
            }
            </div>
    );
}

export default CommentList;