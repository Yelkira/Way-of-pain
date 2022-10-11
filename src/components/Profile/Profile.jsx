import React from "react";
import "./Profile.module.css";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return <div>
        <div>
            <img alt="pup"
                 src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffar-cry-5%2Fhome%2FFC5_01_Banner-1200x200-c79e652045d64313f111e67ac5d3aeb5e8c32b17.jpg"/>
        </div>
        <div>
            <img alt="pup2"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkoKq1Cw65jQDOf767nYXrnmK-TIWRn2-W7dMWq3q6&s"/>
        </div>
        <div>
            <MyPosts/>
        </div>
    </div>
}
export default Profile;
