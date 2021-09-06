import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return <div className={s.dialog}>
            <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
        </div>
}

const Message = (props) =>{
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name = 'Hanna' id='1'/>
                <DialogItem name = 'Nikolay' id='2'/>
                <DialogItem name = 'Andrey' id='3'/>
                <DialogItem name = 'Anastaysha' id='4'/>
                <DialogItem name = 'Alex' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message = 'Hi! How are you?' />
                <Message message = 'How is your job? Finished the redesign?' />
                <Message message = 'Maybe we will meet in the evening?' />
            </div>
        </div>
    )
}

export default Dialogs;