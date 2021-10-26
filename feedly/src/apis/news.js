import axios from "axios";

const fetch = (s) => {
    const link = "https://inshortsapi.vercel.app/news?category="+s;
    return(axios.get(link));
}
const newsApi = {
    fetch,
  };
  
  export default newsApi;