import { useContext } from "react";
import { Card, Col, Button } from "react-bootstrap"
import ReactPlayer from "react-player"
import EnglishContext from "../utils/EnglishContext";
import { MdFavorite,MdOutlineFavoriteBorder} from "react-icons/md";

function ReadingVideo(props) {
    const{reading}=props
    const {likeReading,profiles}=useContext(EnglishContext)
    const liked = reading.likees.includes(profiles._id)
    return (<>
      <Col>
        <Card style={{ disply: "flex", flexDirection: "row", marginBottom: "10px", justifyContent: "space-around",marginLeft:"8px",marginRight:"8px"  }}>
          <ReactPlayer controls url={reading.video} />
        </Card>
        <Button style={{  marginBottom: "5px",backgroundColor:"rgb(45, 9, 61)",color:"white" }} variant="" className="ms-3" onClick={() => likeReading(reading._id)}>
                {liked ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
              </Button>
      </Col>
    </>  );
}

export default ReadingVideo;