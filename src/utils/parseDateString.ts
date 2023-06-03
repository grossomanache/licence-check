const parseDateString = (date: string) => {
  const lastNumber = date.slice(-1);
  const allOtherNumbers = date.slice(0, -1);

  const parsedDate = `${lastNumber}${allOtherNumbers}`;

  return parsedDate;
};

export default parseDateString;
