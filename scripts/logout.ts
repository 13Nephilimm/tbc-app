export const handleLogout = async (): Promise<void> => {
  await fetch("http://localhost:3000/api/logout", {
    method: "POST",
  });
};

