import Form from "react-bootstrap/Form";
import React, { useState } from "react";

export const DropDownFilter = ({ dropDownData }) => {
  const [dropDownValue, setDropDownValue] = useState("");
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Type Of Transportation</Form.Label>
      <select
        className="form-select"
        value={dropDownValue}
        onChange={(event) => setDropDownValue(event.target.value)}
        required
      >
        <option value="" disabled>
          Please Select
        </option>
        {dropDownData.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </Form.Group>
  );
};

export const NormalFilter = ({ inputType }) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Control type={inputType} required />
      <Form.Control.Feedback type="invalid">
        Please enter a quantity.
      </Form.Control.Feedback>
    </Form.Group>
  );
};
