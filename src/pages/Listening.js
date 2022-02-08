import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import VideoListening from "../commpoents/VideoListening"
import { FaAssistiveListeningSystems } from "react-icons/fa"

import EnglishContext from "../utils/EnglishContext"
function Listening() {
  const { listenings } = useContext(EnglishContext)
  return (
    <>
      <h3 style={{ textAlign: "center", fontWeight: "800", margin: "10px" }}>
        Listening <FaAssistiveListeningSystems />
      </h3>
      <Row>
        <Col>
          <Row xs={1} md={3}>
            {listenings.map(listening => (
              <VideoListening listening={listening} />
            ))}
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Listening
