import { Col, Row, Image } from "react-bootstrap"

import { useContext, useState } from "react"
// import styles from "./EmployeeInformation.module.css"
import React from "react"
import { CDBCard, CDBBtn, CDBCardBody, CDBContainer } from "cdbreact"
import { BsFillPhoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { IoIdCardSharp } from "react-icons/io5"
import { AiFillEdit } from "react-icons/ai"
import { SiGoogleclassroom } from "react-icons/si"
import ProfileEditModal from "./ProfileEditModal"
import EnglishContext from "../utils/EnglishContext"

function ProfileInformation() {
  // const { profileEmployee } = props
  const [editShow, setEditShow] = useState(false)
  const { profiles } = useContext(EnglishContext)
  return (
    <>
      <CDBContainer>
        <CDBCard style={{ width: "35rem",marginTop:"30px" }}>
          <Image
            className="img-fluid"
            src="https://www.theheadteacher.com/uploads/article/CPD.jpg"
          />
          <Image
            style={{ marginTop: "-5rem", textAlign: "center", alignItems: "center", marginLeft: "35%" }}
            className=" border "
            width="150px"
            src={profiles.avatar}
          />
          <CDBCardBody className="d-flex flex-column align-items-center mb-4">
            <h2 style={{ fontSize: "20px", fontWeight: "800" }}>
              {profiles.firstName} {profiles.lastName}
            </h2>
            <p style={{ fontSize: "15px", fontWeight: "800" }}>
              <SiGoogleclassroom /> Class Room: {profiles.claass}
            </p>
            <p style={{ fontSize: "15px", fontWeight: "800" }}>
              <MdEmail /> Emial : {profiles.email}
            </p>
        
          
            <div>
              <CDBBtn
                style={{ color: "white", backgroundColor: "rgb(45, 9, 61)", padding: "5px 35px" }}
                size="small"
                onClick={() => setEditShow(true)}
                color="dark"
              >
                {" "}
                Edit <AiFillEdit />
              </CDBBtn>
              <ProfileEditModal show={editShow} setShow={setEditShow} />
            </div>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>

      
    </>
  )
}

export default ProfileInformation
