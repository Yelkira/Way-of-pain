import React from "react";
// import "./Post.module.css";
import s from "./Post.module.css"

const Post = (props) => {
    return(<div className={s.item}>
        <img src="https://weblinks.ru/wp-content/uploads/2021/04/3zeynnx6ija.jpg"/>
        {props.message}
        <div>
            <span>like</span>
            <span>{props.likesCount}</span>
        </div>
    </div>)
}
export default Post;
