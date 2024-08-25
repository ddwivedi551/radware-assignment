// urls.js
const BASE_URL = "http://localhost:5000/api";

export const API_URLS = {
    GET_USER: `${BASE_URL}/users`,
    GET_USER_BY_ID: (id) => `${BASE_URL}/users/${id}`,
};
