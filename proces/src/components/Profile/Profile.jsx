import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div>
            <div>
                <ProfileInfo />
                <MyPosts />
            </div>
        </div>
    );
}

export default Profile;