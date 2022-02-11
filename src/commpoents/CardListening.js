import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import EnglishContext from "../utils/EnglishContext"
import VideoListening from "./VideoListening"

function CardListening() {
  const { genres, listenings } = useContext(EnglishContext)
  return (
    <>
      {genres.map(genre => {
        const listeningGenre = listenings.filter(lis => lis.genres.find(genr => genr._id == genre._id))
        if (listeningGenre.length == 0) return null
        return (
          <>
            <h4 style={{ fontSize: "30px", fontWeight: "800", paddingTop: "7px",textAlign:"center" }}>{genre.name}</h4>
            <Row>
              <Col>
                <Row xs={2} md={4}>
                  {listeningGenre.map(listening => (
                    <VideoListening listening={listening} />
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

export default CardListening
