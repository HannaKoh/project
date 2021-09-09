import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Hanna'},
        {id: 2, name: 'Nikolay'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Anastaysha'},
        {id: 5, name: 'Alex'}
    ]

    let messages = [
        {id: 1, message:'Hi! How are you?'},
        {id: 2, message:'How is your job? Finished the redesign?'},
        {id: 3, message:'Maybe we will meet in the evening?'}
    ]

    let dialogsElements = dialogs.map( (d) => <DialogItem name = {d.name} id = {d.id} /> );

    let messagesElements = messages.map( (m) => <Message message = {m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;