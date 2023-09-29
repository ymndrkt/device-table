import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      name: "",
      department: "",
      status: "live",
      mac: "",
      ip: "",
      doc:"",
      dom:"",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.name && formState.department && formState.status && formState.mac && formState.ip && formState.doc && formState.dom) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" onChange={handleChange} value={formState.name} />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <textarea
              name="department"
              onChange={handleChange}
              value={formState.department}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="mac">MAC Address</label>
            <textarea
              name="mac"
              onChange={handleChange}
              value={formState.mac}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ip">IP Address</label>
            <textarea
              name="ip"
              onChange={handleChange}
              value={formState.ip}
            />
          </div>
          <div className="form-group">
            <label htmlFor="doc">Date of Creation</label>
            <textarea
              name="doc"
              onChange={handleChange}
              value={formState.doc}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dom">Date of Modification</label>
            <textarea
              name="dom"
              onChange={handleChange}
              value={formState.dom}
            />
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};