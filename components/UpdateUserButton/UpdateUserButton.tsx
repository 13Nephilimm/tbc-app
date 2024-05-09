"use client";

import React, { useState } from "react";
import "./UpdateUserButton.css";
import { User } from "../../api";

export default function UpdateUserButton({
  id,
  user,
  updateUser,
}: {
  id: number;
  user: User;
  updateUser: (id: number, updatedUser: User) => void;
}) {
  const [showModal, setShowModal] = useState(false);
  const [updatedUser, setUpdatedUser] = useState<User>({
    id: user.id,
    name: user.name,
    email: user.email,
    age: user.age,
  });

  const handleUpdate = () => {
    setShowModal(true);
  };

  const handleSubmit = () => {
    updateUser(id, updatedUser);
    setShowModal(false);
  };

  return (
    <>
      <button className="update-user-btn" onClick={handleUpdate}>
        Update
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit User</h2>
            <input
              type="text"
              value={updatedUser.name}
              onChange={(e) =>
                setUpdatedUser({ ...updatedUser, name: e.target.value })
              }
              placeholder="name"
            />
            <input
              type="text"
              value={updatedUser.email}
              onChange={(e) =>
                setUpdatedUser({ ...updatedUser, email: e.target.value })
              }
              placeholder="email"
            />
            <input
              type="number"
              value={updatedUser.age}
              onChange={(e) =>
                setUpdatedUser({
                  ...updatedUser,
                  age: parseInt(e.target.value),
                })
              }
              placeholder="age"
            />
            <button className="secondary-btn" onClick={handleSubmit}>
              Submit
            </button>
            <button
              className="secondary-btn cancel-btn"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
