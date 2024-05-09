import React from "react";
import "./admin.css";
import { BASE_URL, User, deleteUser, getUsers, updateUser } from "../../../api";
import Layout from "../../../components/Layout/Layout";
import UserDeleteButton from "../../../components/UserDeleteButton/UserDeleteButton";
import UpdateUserButton from "../../../components/UpdateUserButton/UpdateUserButton";

export default async function adminPage() {
  const users = await getUsers();

  async function createUser(formData: FormData) {
    "use server";

    const { name, email, age } = Object.fromEntries(formData);

    const response = await fetch(BASE_URL + "/api/create-user", {
      method: "POST",
      body: JSON.stringify({ name, email, age }),
    });
    console.log(response);
  }

  const deleteUserAction = async (id: number) => {
    "use server";
    await deleteUser(id);
  };

  const updateUserAction = async (id: number, updatedUser: User) => {
    "use server";
    await updateUser(id, updatedUser);
  };

  return (
    <Layout>
      <div className="admin-panel-container">
        <h1 className="admin-heading">Admin Page</h1>
        <form action={createUser} className="create-user-form">
          <input type="text" name="name" placeholder="name" required />
          <input type="text" name="email" placeholder="email" required />
          <input type="number" name="age" placeholder="age" required />
          <button type="submit" className="secondary-btn">
            Create User
          </button>
        </form>

        {users.map((user: User) => {
          return (
            <div className="single-user-info" key={user.id}>
              <div>
                <h2 className="user-info">Name: {user.name}</h2>
                <h2 className="user-info">Email: {user.email}</h2>
                <h2 className="user-info">Age: {user.age}</h2>
              </div>
              <div className="user-buttons-container">
                <UserDeleteButton id={user.id} deleteUser={deleteUserAction} />
                <UpdateUserButton
                  id={user.id}
                  updateUser={updateUserAction}
                  user={user}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
