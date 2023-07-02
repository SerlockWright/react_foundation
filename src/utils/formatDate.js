// input: 2020-01-01T00:00:00.000Z
// output: MM DD, YYYY

export const formatDate = (date) => {
  if (!date) return "No Date";

  const res = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return res;
};
