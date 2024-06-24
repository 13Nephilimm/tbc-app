export const handleLogout = async (): Promise<void> => {
  await fetch(`${process.env.BASE_URL}/api/logout`, {
    method: "POST",
  });
};
