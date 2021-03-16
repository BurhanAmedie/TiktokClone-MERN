import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok24-backend.herokuapp.com/"
});

export default instance;