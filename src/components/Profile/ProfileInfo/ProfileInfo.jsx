import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
const ProfileInfo = (props) => {
   if (!props.profile){
       return <Preloader/>
   }
    return (
        <div>
        {/*<div>
            <img alt="pup"
                 src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffar-cry-5%2Fhome%2FFC5_01_Banner-1200x200-c79e652045d64313f111e67ac5d3aeb5e8c32b17.jpg"/>
        </div>*/}
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            {/*//ava + description*/}
            {/*<img alt="pup2"*/}
            {/*     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkoKq1Cw65jQDOf767nYXrnmK-TIWRn2-W7dMWq3q6&s"/>*/}
        </div>
    </div>)
}
export default ProfileInfo;
