export const getYear = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear;
};
