export const handleLogin = async (
  username: string,
  password: string
): Promise<void> => {
<<<<<<< HEAD
  const response = await fetch("http://localhost:3000/api/login", {
=======
  await fetch("http://localhost:3000/api/login", {
>>>>>>> origin/typescript-refactor
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });
};