import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Modal, Button, Form } from "react-bootstrap";
import Filter from "./Filter";
import "./customStyle.css";

function FilterBar({ filterOptions, appliedFilters, setAppliedFilters }) {
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

      setAppliedFilters((prev) => [...prev, newFilter]);
      setId((prev) => prev + 1);
    }
  };

  const removeFilter = (id) => {
    setAppliedFilters((prev) => prev.filter((item) => item.id !== id));
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
          {Object.entries(filterOptions).map(([key, _]) => (
            <Dropdown.Item onClick={handleShow}>{key}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {appliedFilters.map((filter) => (
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
            {filterOptions[chosenFilterCategory]}
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
