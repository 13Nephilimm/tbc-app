export const handleLogout = async (): Promise<void> => {
  await fetch(`${process.env}/api/logout`, {
    method: "POST",
  });
};
