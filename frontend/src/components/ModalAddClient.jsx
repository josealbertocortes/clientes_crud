import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';
import { addCLient } from "../utils/addClient";
export const ModalAddClient = ({
  showAddClient,
  setShowAddClient,
  setRefresh,
}) => {
  const [error,setError]=useState(false)

  const handleClose = () => {
    setShowAddClient(false)
    setError(false)
    setErrorsForm({
      name:false,
      lastname:false,
      email:false,
      telephone:false,
      age:false,
      status:false
    })
  };
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    telephone: "",
    age: 0,
    status: ""
  });

  const [errorsForm,setErrorsForm] = useState({
    name:false,
    lastname:false,
    email:false,
    telephone:false,
    age:false,
    status:false
  })

  const handleInputChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    addCLient(form,setErrorsForm,setShowAddClient, setRefresh, setError)
  };

  return (
    <>
      <Modal show={showAddClient} onHide={handleClose}>
       
        <Form onSubmit={hanldeSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add a client</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {error&& <Alert key='danger' variant='danger'>
        there was an error during client creation 
        </Alert>}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name </Form.Label>
              <Form.Control
                type="text"
                onChange={handleInputChange}
                name="name"
                placeholder="Enter name"
                autoComplete="false"
              />
              {errorsForm.name&& <Alert key='danger' variant='danger'>
              Invalid name
              </Alert>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name </Form.Label>
              <Form.Control
                type="text"
                onChange={handleInputChange}
                name="lastname"
                placeholder="Enter lastname"
                autoComplete="false"
              />
              {errorsForm.lastname&& <Alert key='danger' variant='danger'>
              Invalid lastname
              </Alert>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                onChange={handleInputChange}
                name="email"
                placeholder="Enter email"
                autoComplete="false"
              />
              {errorsForm.email&& <Alert key='danger' variant='danger'>
              Invalid email
              </Alert>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Telephone </Form.Label>
              <Form.Control
                type="tel"
                onChange={handleInputChange}
                name="telephone"
                placeholder="Enter telephone"
                autoComplete="false"
              />
               {errorsForm.telephone&& <Alert key='danger' variant='danger'>
              Invalid telephone
              </Alert>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Age </Form.Label>
              <Form.Control
                type="number"
                onChange={handleInputChange}
                name="age"
                placeholder="Enter age"
                autoComplete="false"
              />
              {errorsForm.age&& <Alert key='danger' variant='danger'>
              Invalid age
              </Alert>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Status </Form.Label>
              <Form.Select onChange={handleInputChange} name="status" defaultValue="">
                <option value="">Select an status</option>
                <option value="new">New</option>
                <option value="not_interested">Not interested</option>
                <option value="wrong_number">Wrong number</option>
                <option value="wrong_info">Wrong info</option>
                <option value="high_potential">High potential</option>
                <option value="low_potential">Low potential</option>
              </Form.Select>
              {errorsForm.status&& <Alert key='danger' variant='danger'>
              Invalid status
              </Alert>}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
