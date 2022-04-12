export const dateFormatter = (startDateTime: string, endDateTime: string) => {
  const startDate = new Date(startDateTime);
  const endDate = new Date(endDateTime);

  const start = `${startDate.getHours()}:${startDate.getMinutes()}`;
  const end = `${endDate.getHours()}:${endDate.getMinutes()}`;

  const result = `${start}-${end}`;
  return result;
};
