import { useContext } from "react"
import { GiSpeaker } from "react-icons/gi"
import { FaAssistiveListeningSystems
} from "react-icons/fa"
import EnglishContext from "../utils/EnglishContext"
import { Card, Col, Row } from "react-bootstrap"
import WordCard from "../commpoents/WordsCard"
import ReadingVideo from "../commpoents/ReadingVideo"
import VideoListening from "../commpoents/VideoListening"
import SpeakingVideo from "../commpoents/SpeakingVideo"
function MyFiavorat() {
  // const {speaking}=props
  const { profiles } = useContext(EnglishContext)
  if (!profiles) return <h1>Loading...</h1>

  return (
    <>
     <h3 style={{ textAlign: "center", fontWeight: "800", margin: "10px" }}>
         Speaking Like <GiSpeaker/>
      </h3>      <Row>
        <Col>
          <Row xs={1} md={3}>
            {profiles.likes.map(speaking => (
              <SpeakingVideo speaking={speaking} />
            ))}
          </Row>
        </Col>
      </Row>
      <h3 style={{ textAlign: "center", fontWeight: "800", margin: "10px" }}>
      Video Listening Like <FaAssistiveListeningSystems />
      </h3>
     
      <Row>
        <Col>
          <Row xs={1} md={3}>
            {profiles.likess.map(listening => (
              <VideoListening listening={listening} />
            ))}
          </Row>
        </Col>
      </Row>

      <h3 style={{ textAlign: "center", fontWeight: "800", margin: "10px" }}>
        Reading 
      </h3>      <Row>
        <Col>
          <Row xs={1} md={3}>
            {profiles.likees.map(reading => (
              <ReadingVideo reading={reading} />
            ))}
          </Row>
        </Col>
      </Row>
      <h3 style={{ textAlign: "center", fontWeight: "800", margin: "10px" }}>
      Word Like 
      </h3>
      <Row>
        <Col>
          <Row xs={1} md={4}>
            {profiles.liikes.map(word => (
              <WordCard word={word} />
            ))}
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default MyFiavorat
