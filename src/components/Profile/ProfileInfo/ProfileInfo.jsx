import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/images.png";

const ProfileInfo = ({profile, status, updateStatus, isOwner,savePhoto}) => {
   if (!profile){
       return <Preloader/>
   }
   const onMainPhotoSelected = (e)=>{
        if (e.target.files.length){
            savePhoto(e.target.files[0])
        }
   }

    return (
        <div>
        <div>
            <img alt="pup"
                 src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffar-cry-5%2Fhome%2FFC5_01_Banner-1200x200-c79e652045d64313f111e67ac5d3aeb5e8c32b17.jpg"/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto}className={s.mainPhoto}/>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>)
}
export default ProfileInfo;
