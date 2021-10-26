import axios from "axios";

const fetch = () => axios.get("https://inshortsapi.vercel.app/news?category=science");
const newsApi = {
    fetch,
  };
  
  export default newsApi;