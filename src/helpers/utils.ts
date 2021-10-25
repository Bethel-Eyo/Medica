export const restructureDate = (date: string) => {
  const dateParts = date.split('-');
  let year = dateParts[0];
  let month = dateParts[1];
  let day = dateParts[2];

  return day + '/' + month + '/' + year;
};
