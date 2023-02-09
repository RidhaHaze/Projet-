import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalApp(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">User info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>Skill: {props.user?.info?.skill}</li>
          <li> Phone: {props.user?.info?.phone}</li>
          <li> Age: {props.user?.info?.age}</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
