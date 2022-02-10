import ReactPlayer from "react-player";
import {Button, Col, Card } from "react-bootstrap"
import { useContext } from "react";
import EnglishContext from "../utils/EnglishContext";
import { MdFavorite,MdOutlineFavoriteBorder} from "react-icons/md";
function SpeakingVideo(props) {
    const{speaking}=props
    const {likeSpeaking,profiles,}=useContext(EnglishContext)



  const liked = speaking.likes.includes(profiles._id)
    return (<>
      <Col>
        <Card style={{ disply: "flex", flexDirection: "row",  marginBottom: "5px", justifyContent: "space-around",marginLeft:"8px",marginRight:"8px" }}>
          <ReactPlayer controls url={speaking.video} />
          {/* <Button variant="light" className="ms-3" onClick={() => likeSpeaking(speaking._id)}>
                {liked ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
              </Button> */}
        </Card>
        <Button style={{  marginBottom: "5px",backgroundColor:"rgb(45, 9, 61)",color:"white" }} variant="" className="ms-3" onClick={() => likeSpeaking(speaking._id)}>
                {liked ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
              </Button>
      </Col>
    </>  );
}

export default SpeakingVideo;