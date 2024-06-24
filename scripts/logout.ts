export const handleLogout = async (): Promise<void> => {
  await fetch(`/api/logout`, {
    method: "POST",
  });
};
