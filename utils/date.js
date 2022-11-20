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
