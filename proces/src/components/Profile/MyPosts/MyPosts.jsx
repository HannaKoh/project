import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
                <Post message='Hey, girls! The good day!' like_count='3 like' />
                <Post message='Upyyyyyyy... Puppy....Cats' like_count='5 like' />
                <Post message='x-ray in medcine rules' like_count='15 like' />
            </div>
        </div>


    );
}

export default MyPosts;