import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Navbar.module.css';


const Navbar = (props) => {
    return (
        (
        <nav className={s.nav}>
            <div className = {s.item}>
                <NavLink to='/Profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to='/Dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to='/News' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to = '/Music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to='/Settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <Friends friends={props.state.friends}/>
        </nav>
        )
    );
}

export default Navbar;