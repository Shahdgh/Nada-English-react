import { useContext } from "react";
import ReadingVideo from "../commpoents/ReadingVideo";
import EnglishContext from "../utils/EnglishContext";
import { Col, Row } from "react-bootstrap"
import { FaAssistiveListeningSystems } from "react-icons/fa"
function Reading() {
    const {readings}= useContext(EnglishContext)
    return ( <>
     <h3 style={{ textAlign: "center", fontWeight: "800", margin: "10px" }}>
        Reading 
      </h3>
      <Row>
        <Col>
          <Row xs={1} md={3}>
            {readings.map(reading => (
              <ReadingVideo reading={reading} />
            ))}
          </Row>
        </Col>
      </Row>
    </> );
}

export default Reading;