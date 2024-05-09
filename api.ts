export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

export const BASE_URL = `http://localhost:3000`;

export async function getUsers() {
  const response = await fetch(BASE_URL + "/api/get-users");
  const { users } = await response.json();

  return users.rows;
}

export const deleteUser = async (id: number) => {
  return await fetch(`${BASE_URL}/api/delete-user/${id}`, {
    method: "DELETE",
  });
};

export const updateUser = async (id: number, updatedUser: User) => {
  return await fetch(`${BASE_URL}/api/update-user/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  });
};
