import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message:'Hey, girls! The good day!', like_count: 3},
        {id: 2, message:'Upyyyyyyy... Puppy....Cats', like_count: 5},
        {id: 3, message:'x-ray in medcine rules', like_count: 12}
    ]

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
                <Post message={postsData[0].message} like_count={postsData[0].like_count} />
                <Post message={postsData[1].message} like_count={postsData[1].like_count} />
                <Post message={postsData[2].message} like_count={postsData[2].like_count} />
            </div>
        </div>


    );
}

export default MyPosts;