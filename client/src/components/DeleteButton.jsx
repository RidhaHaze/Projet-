import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/actions/userActions";

export default function DeleteButton(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(props.id));
    handleClose();
  };
  return (
    <div>
      <button
        className="btn btn-outline-danger align-self-baseline mt-2"
        onClick={handleShow}
      >
        <BsFillTrashFill />
      </button>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are you sure</h4>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-danger" onClick={handleDelete}>
            {" "}
            Yes
          </button>
          <button className="btn btn-danger" onClick={handleClose}>
            No
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
