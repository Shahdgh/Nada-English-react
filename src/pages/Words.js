import { useContext } from "react"
import WordCard from "../commpoents/WordsCard"
import EnglishContext from "../utils/EnglishContext"
import { Col, Row } from "react-bootstrap"
import CardWord from "../commpoents/CardWord"

function Words() {
  const { words } = useContext(EnglishContext)
  return (
    <>
      <h3 style={{ textAlign: "center", fontWeight: "800", margin: "10px" }}>Words</h3>

      <CardWord  />
    </>
  )
}

export default Words
