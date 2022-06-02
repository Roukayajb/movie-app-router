import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import RatingInput from "./RatingInput";
function AddModal({ show = true, addHandle, handleClose }) {
  const [inputs, setInputs] = useState({ title: "" });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              placeholder="Title of the Movie"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Poster URL</Form.Label>
            <Form.Control
              name="posterURL"
              placeholder="the poster URL"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <RatingInput
              onChange={(r) => setInputs((v) => ({ ...v, rating: r }))}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              placeholder="description"
              onChange={handleChange}
            />
          </Form.Group>
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => addHandle(inputs)}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddModal;
