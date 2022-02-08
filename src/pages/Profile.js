import { useContext } from "react";
import ProfileInformation from "../commpoents/ProfileInformation";
import EnglishContext from "../utils/EnglishContext";

function Profile() {
    const { profiles } = useContext(EnglishContext)
    if (!profiles) return <h1>Loading...</h1>
    console.log(profiles)
    return (
      <>
        <ProfileInformation key={profiles._id} />
        </>
    )
}

export default Profile;