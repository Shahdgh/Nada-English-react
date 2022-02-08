import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import ReactPlayer from "react-player"
import EnglishContext from "../utils/EnglishContext"

function VideoListening(props) {
  const { listening } = props
  return (
    <>
      <Col>
        <Card style={{ disply: "flex", flexDirection: "row", marginBottom: "10px", justifyContent: "space-around",marginLeft:"8px",marginRight:"8px"  }}>
          <ReactPlayer controls url={listening.video} />
        </Card>
      </Col>
    </>
  )
}

export default VideoListening
