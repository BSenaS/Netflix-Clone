import { useState } from "react";
import {profiles} from "../profiles";
import Profile from "../components/Profile";


//Map yaptığın zaman bir key vermeyi unutma, eğer arrowdan sonra süslü parentez açarsan returnla!
export default function Welcome(props) {
  const [profileList,setProfileList] = useState([profiles]);
  const {changeUser} = props;

  return (
    <>
    <h1>Who's Watching?</h1>
    <div className="profile-container" >
      {profiles.map((item,index) => {
        return <Profile 
        changeUser={changeUser}
        key={index} 
        profile={item}/> 
      })}  
    </div>
    </>
  );
}