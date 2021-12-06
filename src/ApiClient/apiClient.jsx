import axios from "axios";

const SEARCH_URL = (title) => "https://images-api.nasa.gov/search?q=" + title;

const apiClient = {
  getData: (title) => {
    title = encodeURIComponent(title);
    return axios.get(SEARCH_URL(title));
  },
  getVideo: (title) => {
    return axios.get(title);
  },
};
export default apiClient;
