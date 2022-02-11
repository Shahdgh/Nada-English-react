
import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import EnglishContext from "../utils/EnglishContext"
import ReadingVideo from "./ReadingVideo"
import VideoListening from "./VideoListening"
import WordCard from "./WordsCard"

function CardWord() {
  const { genres, words } = useContext(EnglishContext)
  return (
    <>
      {genres.map(genre => {
        const wordGenre = words.filter(wor => wor.genres.find(genr => genr._id == genre._id))
        if (wordGenre.length == 0) return null
        return (
          <>
            <h4 style={{ fontSize: "30px", fontWeight: "800", paddingTop: "7px",textAlign:"center" }}>{genre.name}</h4>
            <Row>
              <Col>
                <Row xs={2} md={4}>
                  {wordGenre.map(word => (
                    <WordCard word={word} />
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

export default CardWord
