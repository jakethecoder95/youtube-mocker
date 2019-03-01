import axios from "axios";

const KEY = "AIzaSyCePxq0pcOYXqrqSoI6iE6hdp7RgXG-n3E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY,
    maxResults: 5
  }
});
