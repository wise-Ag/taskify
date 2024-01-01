export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  return `${dateObj.getFullYear()}.${dateObj.getMonth() + 1}.${dateObj.getDate()}`;
};

export const formatUpdatedAt = (updatedAt: string) => {
  const date = new Date(updatedAt);
  const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
  return formattedDate;
};
