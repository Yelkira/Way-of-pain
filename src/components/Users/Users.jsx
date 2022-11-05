import React from "react";
import s from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/images.png"

class Users extends React.Component{
        componentDidMount() {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response=>
                    this.props.setUsers(response.data.items)
                )
        }

    render(){
        return (<div>
            {this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img alt="sos" src={u.photos.small !=null ? u.photos.small:userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {this.props.unfollow(u.id)}}>UNFOLLOW</button>
                                : <button onClick={() => {this.props.follow(u.id)}}>FOLLOW</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
            </div>)}
        </div>)
    }
}
export default Users;