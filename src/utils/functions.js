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

export const publicshedAgo = (publishedAt) => {
  const currentDate = new Date();
  const videoDate = new Date(publishedAt);
  const timeDifference = currentDate - videoDate;
  const daysSincePublished = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysSincePublished < 1) {
    return 'today';
  } else if (daysSincePublished < 7) {
    return `${daysSincePublished} ${daysSincePublished > 1 ? 'days' : 'day'} ago`;
  } else if (daysSincePublished < 30) {
    const weeksSincePublished = Math.floor(daysSincePublished / 7);
    return `${weeksSincePublished} ${weeksSincePublished > 1 ? 'weeks' : 'week'} ago`;
  } else if (daysSincePublished < 365) {
    const monthsSincePublished = Math.floor(daysSincePublished / 30);
    return `${monthsSincePublished} ${monthsSincePublished > 1 ? 'months' : 'month'} ago`;
  } else {
    const yearsSincePublished = Math.floor(daysSincePublished / 365);
    return `${yearsSincePublished} ${yearsSincePublished > 1 ? 'years' : 'year'} ago`;
  }
};
