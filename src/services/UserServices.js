// import axios from "axios";
import axios from './customize_axios';

const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`);
}

const postCreateUsers = (name, job) => {
    return axios.post("/api/users", {name, job});
}

const putUpdateUser = (name, job) => {
    return axios.put("/api/users/1", {name, job});
}
export {fetchAllUser, postCreateUsers, putUpdateUser};