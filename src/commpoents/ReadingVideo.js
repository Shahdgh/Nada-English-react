import { Card, Col, Row } from "react-bootstrap"
import ReactPlayer from "react-player"

function ReadingVideo(props) {
    const{reading}=props
    return (<>
      <Col>
        <Card style={{ disply: "flex", flexDirection: "row", marginBottom: "10px", justifyContent: "space-around",marginLeft:"8px",marginRight:"8px"  }}>
          <ReactPlayer controls url={reading.video} />
        </Card>
      </Col>
    </>  );
}

export default ReadingVideo;