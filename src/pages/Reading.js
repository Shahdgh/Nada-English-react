import { useContext } from "react"
import ReadingVideo from "../commpoents/ReadingVideo"
import EnglishContext from "../utils/EnglishContext"
import { Col, Row } from "react-bootstrap"
import { FaAssistiveListeningSystems } from "react-icons/fa"
import CardReading from "../commpoents/CardReading"
function Reading() {
  const { readings } = useContext(EnglishContext)
  return (
    <>
      <h3 style={{ textAlign: "center", fontWeight: "800", margin: "10px" }}>Reading</h3>

      <CardReading />
    </>
  )
}

export default Reading
