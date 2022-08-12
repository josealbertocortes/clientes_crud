import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';
import axios from "axios";
export const ModalUpdateClient = ({
  setShowUpdateClient,
  client,
  setClient,
  showUpdateClient,
  setRefresh,
}) => {
  const handleClose = () => {
        setShowUpdateClient(false)
        setError(false)
    };
  const [error,setError]=useState(false)
  const handleInputChange = ({ target }) => {
    setClient({
      ...client,
      [target.name]: target.value,
    });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://127.0.0.1:8000/api/clients/${client.id}/`, client)
      .then(function (response) {
        setShowUpdateClient(false);
        setRefresh((c) => !c);
      })
      .catch(function (error) {
        setError(true)
      });
  };

  return (
    <>
      <Modal show={showUpdateClient} onHide={handleClose}>
        <Form onSubmit={hanldeSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Update client</Modal.Title>
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
                value={client.name}
                placeholder="Enter name"
                autoComplete="false"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name </Form.Label>
              <Form.Control
                type="text"
                onChange={handleInputChange}
                name="lastname"
                value={client.lastname}
                placeholder="Enter lastname"
                autoComplete="false"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                onChange={handleInputChange}
                name="email"
                value={client.email}
                placeholder="Enter email"
                autoComplete="false"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Telephone </Form.Label>
              <Form.Control
                type="tel"
                onChange={handleInputChange}
                name="telephone"
                value={client.telephone}
                placeholder="Enter telephone"
                autoComplete="false"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Age </Form.Label>
              <Form.Control
                type="number"
                onChange={handleInputChange}
                name="age"
                value={client.age}
                placeholder="Enter age"
                autoComplete="false"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Status </Form.Label>
              <Form.Select
                onChange={handleInputChange}
                name="status"
                value={client.status}
              >
                <option value="">Select an status</option>
                <option value="new">New</option>
                <option value="not_interested">Not interested</option>
                <option value="wrong_number">Wrong number</option>
                <option value="wrong_info">Wrong info</option>
                <option value="high_potential">High potential</option>
                <option value="low_potential">Low potential</option>
              </Form.Select>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
