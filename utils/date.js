// This files handles dates in posts
export const postDate = (date) => {
  const postDate = new Date(date);

  const options = {
    day: "2-digit",
    month: "long",
    year: "2-digit",
  };

  return postDate.toLocaleDateString("it-IT", options);
};

export const timestamp = (date) => new Date(date).toISOString();

export const days = (before, after) => {
  const diff = after.getTime() - before.getTime();
  const total = Math.ceil(diff / (1000 * 3600 * 24));
  return total;
};
