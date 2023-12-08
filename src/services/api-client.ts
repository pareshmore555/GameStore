import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cac5f5ff39ab41c9944410f073bbc525",
  },
});
