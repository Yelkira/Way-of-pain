import s from "./Users.module.css";
import userPhoto from "../../assets/images/images.png";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + user.id}>
                            <img alt="sos" src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    unfollow(user.id)
                                }}>UNFOLLOW</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    follow(user.id)
                                }}>FOLLOW</button>}
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
        </div>)
}

export default User;