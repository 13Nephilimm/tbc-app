"use client";

import React from "react";
import "./UserDeleteButton.css";

export default function UserDeleteButton({
  id,
  deleteUser,
}: {
  id: number;
  deleteUser: (id: number) => void;
}) {
  return (
    <button
      className="delete-user-btn"
      onClick={() => {
        deleteUser(id);
      }}
    >
      X
    </button>
  );
}
