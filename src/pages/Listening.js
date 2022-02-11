import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import VideoListening from "../commpoents/VideoListening"
import { FaAssistiveListeningSystems } from "react-icons/fa"

import EnglishContext from "../utils/EnglishContext"
import CardListening from "../commpoents/CardListening"
function Listening() {
  return (
    <>
      <h3 style={{ textAlign: "center", fontWeight: "800", margin: "10px" }}>
        Listening <FaAssistiveListeningSystems />
      </h3>

      <CardListening />
    </>
  )
}

export default Listening
