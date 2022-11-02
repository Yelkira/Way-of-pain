import React from "react";
import s from "./Users.module.css"

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: "https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg ",
                    followed: false,
                    fullName: "Leha",
                    status: "I am a boss of the GYM",
                    location: {city: "Moscow", country: "Russia"}
                },
                {
                    id: 2,
                    photoUrl: "https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg",
                    followed: true,
                    fullName: "Dmitry",
                    status: "slave",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 3,
                    photoUrl: "https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg",
                    followed: true,
                    fullName: "Andrew",
                    status: "slave",
                    location: {city: "Belgorod", country: "Russia"}
                },
                {
                    id: 4,
                    photoUrl: "https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg",
                    followed: false,
                    fullName: "Lena",
                    status: "slave",
                    location: {city: "Vorkuta", country: "Russia"}
                }
                ]
        )
    }
    return (<div>
        {props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>UNFOLLOW</button>
                                : <button onClick={() => {props.follow(u.id)}}>FOLLOW</button>}
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
        </div>)}
    </div>)
}
export default Users;