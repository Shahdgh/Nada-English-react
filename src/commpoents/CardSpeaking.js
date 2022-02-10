import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import EnglishContext from "../utils/EnglishContext"
import SpeakingVideo from "./SpeakingVideo"

function CardSpeaking() {
  const { genres, speakings } = useContext(EnglishContext)
  return (
    <>
      {genres.map(genre => {
        const SpeakingGenre = speakings.filter(spe => spe.genres.find(genr => genr._id == genre._id))
        if (SpeakingGenre.length == 0) return null
        return (
          <>
            <h4 style={{ fontSize: "30px", fontWeight: "800", paddingTop: "7px",textAlign:"center" }}>{genre.name}</h4>
            <Row>
              <Col>
                <Row xs={2} md={4}>
                  {SpeakingGenre.map(speaking => (
                    <SpeakingVideo speaking={speaking} />
                  ))}
                </Row>
              </Col>
            </Row>
          </>
        )
      })}
    </>
  )
}

export default CardSpeaking
