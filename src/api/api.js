import * as axios from 'axios';

const instance =  axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {
        'API-KEY':'0d8d272d-7a56-482f-bdd4-e713c785aef3'
    }
})

export const userApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    }, 
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    }
};

 