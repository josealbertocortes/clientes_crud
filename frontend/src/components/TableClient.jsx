import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ModalUpdateClient } from "./ModalUpdateClient";
export const TableClient = ({ clients, setRefresh }) => {
  const [showUpdateClient, setShowUpdateClient] = useState(false);
  const [client, setClient] = useState({});

  const handleUpdateClient = ({ target }) => {
    let index = parseInt(target.dataset.id);
    setClient(clients[index]);
    setShowUpdateClient(true);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Telephone</th>
            <th>Email</th>
            <th>Age</th>
            <th>Status</th>
            <th>Date</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => {
            return (
              <tr key={`${client.id}-${client.name}`}>
                <td>{index + 1}</td>
                <td>{client.name}</td>
                <td>{client.lastname}</td>
                <td>{client.telephone}</td>
                <td>{client.email}</td>
                <td>{client.age}</td>
                <td>{client.status}</td>
                <td>{client.createdAt}</td>
                <td>
                  <Button
                    variant="success"
                    data-id={index}
                    onClick={handleUpdateClient}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ModalUpdateClient
        client={client}
        setRefresh={setRefresh}
        setShowUpdateClient={setShowUpdateClient}
        setClient={setClient}
        showUpdateClient={showUpdateClient}
      />
    </>
  );
};
