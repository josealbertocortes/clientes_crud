import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import moment from "moment";
import { TableClient } from "./TableClient";
import { ModalAddClient } from "./ModalAddClient";

export const Clients = () => {
  const [clients, setClients] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [showAddClient, setShowAddClient] = useState(false);

  useEffect(() => {
    async function getClients() {
      let { data } = await axios.get("http://127.0.0.1:8000/api/clients");
      data = data.map((item) => {
        item.createdAt = moment(item.createdAt).format("L");
        return item;
      });
      setClients(data);
    }
    getClients();
  }, [refresh]);
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1 className="text-center">Clients </h1>
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <Button variant="primary" onClick={() => setShowAddClient(true)}>
            Add client
          </Button>
        </Col>
      </Row>

      <Row>
        {clients.length ? (
          <TableClient clients={clients} setRefresh={setRefresh} />
        ) : (
          <Alert key="success" variant="success">
            No hay clientes registrados
          </Alert>
        )}
      </Row>
      <ModalAddClient
        showAddClient={showAddClient}
        setRefresh={setRefresh}
        setShowAddClient={setShowAddClient}
      />
    </Container>
  );
};
