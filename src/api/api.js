import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '0d8d272d-7a56-482f-bdd4-e713c785aef3'
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
        console.warn('You use old api version, please change it');
        return profileApi.getProfile(userId);
    }

};

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        });
    }
};

export const authApi = {
    login(payload) {
        return instance.post(`/auth/login`,payload);
    },
    logout() {
      return instance.delete('/auth/login');
    },
    getCurrentUser() {
        return instance.get(`auth/me`);
    },
    getCaptcha() {
        return instance.get(`/security/get-captcha-url`);
    }
};

