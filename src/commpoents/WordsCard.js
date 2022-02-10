import { useContext } from "react"
import { Card, Col,Button } from "react-bootstrap"
import { BsTranslate } from "react-icons/bs"
import EnglishContext from "../utils/EnglishContext"
import { MdFavorite,MdOutlineFavoriteBorder} from "react-icons/md";

function WordCard(props) {
  const { word } = props
  const {likeWord,profiles}=useContext(EnglishContext)
  const liked = word.liikes.includes(profiles._id)
  return (
    <>
    <Col>
      <Card style={{  marginBottom: "10px", justifyContent: "space-around" ,textAlign:"center",fontWeight:"600",marginLeft:"15px",marginRight:"15px" }}>
        <Card.Img variant="top"height="200vh"width="100%" src={word.image} />
        <Card.Body>
          <Card.Title style={{ fontWeight:"800" }}>{word.word}</Card.Title>
          {/* <Card.Text style={{ fontWeight:"800" }}><BsTranslate style={{fontSize:"20px"}}/> : {word.translation}</Card.Text> */}
        </Card.Body>
        <Button style={{ backgroundColor:"rgb(45, 9, 61)",color:"white",padding:"5px"}} variant="" className="" onClick={() => likeWord(word._id)}>
                {liked ? <MdFavorite  /> : <MdOutlineFavoriteBorder />}
              </Button>
      </Card>
      </Col>
    </>
  )
}

export default WordCard
