
import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:4000'
});


const token = window.localStorage.getItem("token")
if (token) {
    api.defaults.headers.common['Authorization'] = token;
}




export default api;