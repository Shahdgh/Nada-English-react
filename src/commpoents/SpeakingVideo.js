import ReactPlayer from "react-player";
import { Col, Card } from "react-bootstrap"

function SpeakingVideo(props) {
    const{speaking}=props
    return (<>
      <Col>
        <Card style={{ disply: "flex", flexDirection: "row", marginBottom: "10px", justifyContent: "space-around",marginLeft:"8px",marginRight:"8px" }}>
          <ReactPlayer controls url={speaking.video} />
        </Card>
      </Col>
    </>  );
}

export default SpeakingVideo;