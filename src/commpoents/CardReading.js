
import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import EnglishContext from "../utils/EnglishContext"
import ReadingVideo from "./ReadingVideo"
import VideoListening from "./VideoListening"

function CardReading() {
  const { genres, readings } = useContext(EnglishContext)
  return (
    <>
      {genres.map(genre => {
        const readingGenre = readings.filter(rea => rea.genres.find(genr => genr._id == genre._id))
        if (readingGenre.length == 0) return null
        return (
          <>
            <h4 style={{ fontSize: "30px", fontWeight: "800", paddingTop: "7px",textAlign:"center" }}>{genre.name}</h4>
            <Row>
              <Col>
                <Row xs={2} md={4}>
                  {readingGenre.map(reading => (
                    <ReadingVideo reading={reading} />
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

export default CardReading
