import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let newMessage = React.createRef();
    let sendMessage = () =>{
        let text = newMessage.current.value;
        alert(text)
    }
    let dialogsElements =
        props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements =
        props.state.messages.map(m => <Message message={m.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
            <textarea ref={newMessage}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )

}


export default Dialogs;