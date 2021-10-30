import axios from "axios";

const subscribe = payload => axios.post("https://webhook.site/ed4a3dbf-6644-4361-b621-e07062577df4", payload);


const subscribeApi = {
  subscribe
};

export default subscribeApi;