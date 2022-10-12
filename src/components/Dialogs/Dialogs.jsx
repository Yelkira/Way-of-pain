import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog +" "+ s.active}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Valery
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>HI</div>
                <div className={s.message}>How is your it-kamasutra?</div>
                <div className={s.message}>Yo?</div>
                <div className={s.message}></div>
            </div>
        </div>
    )

}


export default Dialogs;