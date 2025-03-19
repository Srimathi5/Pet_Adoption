import React, { useState } from "react";

const AdminRequest = () => {
  const [requests, setRequests] = useState([
    { id: 1, user: "John Doe", pet: "Bella", status: "Pending" },
    { id: 2, user: "Jane Smith", pet: "Max", status: "Pending" },
  ]);

  const handleUpdateRequest = (id, status) => {
    setRequests(
      requests.map((req) => (req.id === id ? { ...req, status } : req))
    );
  };

  return (
    <div>
      <h1>Admin Request Form</h1>
      {requests.map((req) => (
        <div className="request" key={req.id}>
          <p>
            <strong>User:</strong> {req.user}
          </p>
          <p>
            <strong>Pet:</strong> {req.pet}
          </p>
          <p>
            <strong>Status:</strong> {req.status}
          </p>
          <button onClick={() => handleUpdateRequest(req.id, "Approved")}>
            Approve
          </button>
          <button onClick={() => handleUpdateRequest(req.id, "Rejected")}>
            Reject
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminRequest;
