import { useState } from "react";

import "./UserTable.css";
import { Table } from "./Components/Table";
import { Modal } from "./Components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      name: "PC1",
      department: "HR",
      status: "live",
      mac:"00000ABB28FC",
      ip:"192.158.1.38",
      doc:"09/12/23",
      dom:"09/22/23",
    },
    {
      name: "PC2",
      department: "IT",
      status: "draft",
      mac:"00000ABB28FC",
      ip:"192.158.1.38",
      doc:"09/12/23",
      dom:"09/23/23",
    },
    {
      name: "PC3",
      department: "IT",
      status: "error",
      mac:"00000ABB28FC",
      ip:"192.158.1.38",
      doc:"09/12/23",
      dom:"09/25/23",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="UserTable">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default App;