import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: '1', message: 'Hello! How are you?', likeCount: '20'},
        {id: '2', message: "It's my first post", likeCount: '24'}
    ]

    let postsElements = posts.map(p => <Post message={p.message} id={p.id} likeCount={p.likeCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;