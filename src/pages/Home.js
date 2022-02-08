import { Col, Row } from "react-bootstrap";
import Footer from "../commpoents/Footer";
import SectionOne from "../commpoents/SectionOne";
import SectionThree from "../commpoents/SectionThree";
import SectionTow from "../commpoents/SectionTow";

function Home() {
    return (
        <>
        <SectionOne/>
        <SectionThree/>
        <h2 style={{ textAlign: "center", fontWeight: "600", margin: "15px" }}>
        Apps and Channels That Help You Learn The Language
      </h2>
        <Row >
            <Col>
            <Row xs={1} md={4} >
        <SectionTow/>
        </Row>
        </Col>
        </Row>
        <Footer/>
        </>
        // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsXV_snbOQuaKJZppyMpkJ7iCAcxS_luNyA&usqp=CAU
      );
}

export default Home;