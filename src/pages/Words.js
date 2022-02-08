import { useContext } from "react"
import WordCard from "../commpoents/WordsCard"
import EnglishContext from "../utils/EnglishContext"
import { Col, Row } from "react-bootstrap"

function Words() {
  const { words } = useContext(EnglishContext)
  return (
    <>
      <h3 style={{ textAlign: "center", fontWeight: "800", margin: "10px" }}>
        Words 
      </h3>
      <Row>
        <Col>
          <Row xs={1} md={4}>
            {words.map(word => (
              <WordCard word={word} />
            ))}
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Words
