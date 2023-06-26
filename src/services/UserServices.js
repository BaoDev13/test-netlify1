// import axios from "axios";
import axios from './customize_axios';

const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`);
}

const postCreateUsers = (name, job) => {
    return axios.post("/api/users", {name, job});
}
export {fetchAllUser, postCreateUsers};