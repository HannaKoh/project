import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.posts.map((m) => <Post img src = {m.src} message={m.message} like_count={m.like_count} />)

    return (

        <div className={`${s.content} ${s.head} ${s.postsBlock}`}>
           <h3>  My posts </h3>
            <div>
                <textarea></textarea>
            </div>
            <div className={s.button}>
                <button>Опубликовать</button>
            </div>
            <div className={`${s.content} ${s.head}`}>
                New post
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>


    );
}

export default MyPosts;