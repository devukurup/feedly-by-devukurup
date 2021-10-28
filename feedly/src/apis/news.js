import axios from "axios";

const fetch = (category) => {
    const links = category.map(cat => "https://inshortsapi.vercel.app/news?category="+cat)
    const response = axios.all(links.map(link => axios.get(link)))
    return(response);
}
const newsApi = {
    fetch,
  };
  
  export default newsApi;