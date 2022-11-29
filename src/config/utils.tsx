export const currentDate = () => {
  const time = new Date();
  return (
    time.getMonth() +
    "/" +
    time.getDate() +
    "/" +
    time.getFullYear() +
    " " +
    time.getHours() +
    ":" +
    time.getMinutes() +
    ":" +
    time.getSeconds()
  );
};
