import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
           <img src='https://superbody.pro/user_files/11/avatar/171e984f4e.jpg' />
            {props.message} 
            <div>
                <span>{props.like_count}</span>
            </div>
        </div>

    );
}

export default Post;