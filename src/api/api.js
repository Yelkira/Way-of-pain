import axios from "axios";


const baseURL = `https://social-network.samuraijs.com/api/1.0/`;

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    "API-KEY": "da6b5c12-d524-4aa9-a051-161f2c08cb6f"
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(baseURL + `users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data;
            });
    }
}





