// count formate
export const formattedCount = (count) => {
  let formattedViewCount;
  if (count >= 1000000) {
    formattedViewCount = (count / 1000000).toFixed(1) + "M";
  } else if (count >= 1000) {
    formattedViewCount = (count / 1000).toFixed(1) + "K";
  } else {
    formattedViewCount = count.toString();
  }

  return formattedViewCount;
};

// published day count
export const publicshedAgo = (publishedAt) => {
  const currentDate = new Date();
  const videoDate = new Date(publishedAt);
  const timeDifference = currentDate - videoDate;
  const daysSincePublished = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysSincePublished;
};
