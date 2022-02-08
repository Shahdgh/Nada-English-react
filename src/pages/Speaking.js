import { useContext } from "react";
import EnglishContext from "../utils/EnglishContext";
import { Col, Row } from "react-bootstrap"
import SpeakingVideo from "../commpoents/SpeakingVideo";
import { GiSpeaker } from "react-icons/gi"

function Speaking() {
    const{speakings}=useContext(EnglishContext)
    return ( <>
      <h3 style={{ textAlign: "center", fontWeight: "800", margin: "10px" }}>
        Let's Speaking <GiSpeaker/>
      </h3>
      <Row>
        <Col>
          <Row xs={1} md={3}>
            {speakings.map(speaking => (
              <SpeakingVideo speaking={speaking} />
            ))}
          </Row>
        </Col>
      </Row>
    </> );
}

export default Speaking;