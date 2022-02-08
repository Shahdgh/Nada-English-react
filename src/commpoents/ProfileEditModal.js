import { useContext } from "react";
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import EnglishContext from "../utils/EnglishContext";

function ProfileEditModal(props) {
    const { show, setShow } = props
    const { editProfile, profiles } =useContext(EnglishContext)
    return (
        <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editProfile(e, profiles._id)}>
        <Modal.Header style={{ backgroundColor: "rgb(45, 9, 61)", color: "white" }} closeButton>
          <Modal.Title style={{ color: "white" }}>Edit profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="firstName" type="text" defaultValue={profiles.firstName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Last Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" defaultValue={profiles.lastName} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Class
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="claass" defaultValue={profiles.claass} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              email
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email" defaultValue={profiles.email} />
            </Col>
          </Form.Group>
          {/* <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Avatar
            </Form.Label>
            <Col md="8">
              <Form.Control type="file" name="avatar" accept="image/jpg,image/png"   />
            </Col>
          </Form.Group> */}
          {/* <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Password
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="password" defaultValue={profiles.password} />
            </Col>
          </Form.Group> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button
            variant=""
            style={{ backgroundColor: "rgb(45, 9, 61)", color: "white" }}
            type="submit"
            onClick={() => setShow(false)}
          >
            Edit Profile
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
      );
}

export default ProfileEditModal;