import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d357fa422ce6434c84e812f5ebf8f772",
  },
});
