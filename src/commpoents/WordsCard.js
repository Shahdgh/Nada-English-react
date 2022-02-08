import { Card, Col } from "react-bootstrap"
import { BsTranslate } from "react-icons/bs"

function WordCard(props) {
  const { word } = props
  return (
    <>
    <Col>
      <Card style={{  marginBottom: "10px", justifyContent: "space-around" ,width: "18rem",textAlign:"center",fontWeight:"600",marginLeft:"15px",marginRight:"15px" }}>
        <Card.Img variant="top"height="200vh"width="100%" src={word.image} />
        <Card.Body>
          <Card.Title style={{ fontWeight:"800" }}>{word.word}</Card.Title>
          {/* <Card.Text style={{ fontWeight:"800" }}><BsTranslate style={{fontSize:"20px"}}/> : {word.translation}</Card.Text> */}
        </Card.Body>
      </Card>
      </Col>
    </>
  )
}

export default WordCard
