export const handleLogout = async (): Promise<void> => {
  const response = await fetch("http://localhost:3000/api/logout", {
    method: "POST",
  });
};