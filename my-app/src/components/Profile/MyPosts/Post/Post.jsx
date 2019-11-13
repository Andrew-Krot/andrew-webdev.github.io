import React from "react";
import s from "./Post.module.css";

const Post = props => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpMwQTbkRoevuO3plNpsFG05mOVRPMMTzQT4iygX8i7VvcmO81"
                alt="ava"
            />
            {props.message}
            <div>
                <span>like</span> {props.likeCount}
            </div>
        </div>
    );
};

export default Post;
