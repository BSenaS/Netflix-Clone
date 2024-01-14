import "./Profile.css";
import { useHistory } from "react-router-dom";

export default function Profile(props) {
  //Verileri prop olarak alma
  const {profile,changeUser} = props;
  const history = useHistory();

  const handleClick = () => {
    changeUser(profile);
    history.push("/browse");
  }

  return (
    <div className="profile-card" onClick={handleClick}>
      <img src={profile.avatar} />
      <h2>{profile.nickname}</h2>
    </div>
  );
}