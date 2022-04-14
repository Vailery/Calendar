export const dateFormatter = (startDateTime: string, endDateTime: string) => {
  const startDate = new Date(startDateTime);
  const endDate = new Date(endDateTime);

  const start = `${startDate.getHours()}:${startDate.getMinutes()}`;
  const end = `${endDate.getHours()}:${endDate.getMinutes()}`;

  const result = `${start}-${end}`;
  return result;
};

export const dateTransformation = (dateTime: string) => {
  const date = new Date(dateTime);

  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const result = `${day}-${month}-${year}`;
  return result;
};
