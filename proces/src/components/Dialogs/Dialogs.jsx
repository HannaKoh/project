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

    let messagesElements = messages.map( m => <Message m = {m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                {/*<DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id}/>
                <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id}/>
                <DialogItem name = {dialogsData[2].name} id = {dialogsData[2].id}/>
                <DialogItem name = {dialogsData[3].name} id = {dialogsData[3].id}/>
                <DialogItem name = {dialogsData[4].name} id = {dialogsData[4].id}/>*/}
            </div>
            <div className={s.messages}>
                {messagesElements}
               {/* <Message message = {messageData[0].message} />
                <Message message = {messageData[1].message} />
                <Message message = {messageData[2].message} />*/}
            </div>
        </div>
    )
}

export default Dialogs;