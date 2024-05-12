import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Modal, Button, Form } from "react-bootstrap";
import Filter from "./Filter";
import "./customStyle.css";

const mapping = {
  int: "number",
  str: "text",
  dateTime: "datetime-local",
};

function FilterBar() {
  const [filters, setFilters] = useState([]);
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [chosenFilterCategory, setChosenFilter] = useState("test");
  const [id, setId] = useState(0);

  const handleClose = () => {
    setValidated(false);
    setShow(false);
  };

  const handleShow = (value) => {
    setShow(true);
    setChosenFilter(value.target.innerText);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.currentTarget.checkValidity() === false) {
      setValidated(true);
    } else {
      setValidated(false);
      setShow(false);
      const newFilter = {
        id: id,
        category: chosenFilterCategory,
        value: event.target[0].value,
      };

      setFilters((prev) => [...prev, newFilter]);
      setId((prev) => prev + 1);
    }
  };

  const removeFilter = (id) => {
    setFilters((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="d-flex flex-row-reverse flex-wrap  gap-2 py-2 px-2 mb-1">
      <Dropdown className="d-flex align-items-center">
        <Dropdown.Toggle
          className="hide-arrow"
          variant="success"
          id="dropdown-basic"
        >
          + Add Filter
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={handleShow}>int</Dropdown.Item>
          <Dropdown.Item onClick={handleShow}>str</Dropdown.Item>
          <Dropdown.Item onClick={handleShow}>dateTime</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {filters.map((filter) => (
        <Filter
          id={filter.id}
          filterCategory={filter.category}
          filterValue={filter.value}
          removeFilter={removeFilter}
        ></Filter>
      ))}

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{chosenFilterCategory} Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            className="d-flex flex-column justify-content-center"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type={mapping[chosenFilterCategory]} required />
              <Form.Control.Feedback type="invalid">
                Please enter a quantity.
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="p-1 w-25 m-auto "
            >
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default FilterBar;
