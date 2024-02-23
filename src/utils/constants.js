const YOUTUB_KEY = "AIzaSyBK4ztdGTTR81CXoOA5NRYDSQudQMb53J4";
export const YOUTUB_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUB_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const VIDEO_DATA_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=AIzaSyBK4ztdGTTR81CXoOA5NRYDSQudQMb53J4";
// "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY]";

export const VIDEO_COMMENTS =
  "https://www.googleapis.com/youtube/v3/commentThreads?key=" +
  YOUTUB_KEY +
  "&textFormat=plainText&part=snippet&maxResults=100&videoId=";
// "https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyBK4ztdGTTR81CXoOA5NRYDSQudQMb53J4&textFormat=plainText&part=snippet&videoId=sNpy-C-VxYY&maxResults=100";
