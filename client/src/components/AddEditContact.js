import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContact } from "../redux/actions/contactActions";

function AddEditContact() {
  const [user, setUser] = useState({ name: "", email: "", age: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addContact(user));
    navigate("/contacts");
  };

  return (
    <Form style={{ width: "30%", margin: "auto" }}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="Text"
          placeholder="Enter email"
          name="email"
          onChange={handlechange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="Text"
          placeholder="Enter Name"
          name="name"
          onChange={handlechange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Age"
          name="age"
          onChange={handlechange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleAdd}>
        Add
      </Button>
    </Form>
  );
}

export default AddEditContact;
