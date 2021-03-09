const axios = window.axios;
const BASE_API_URL = 'http://localhost:8000/api'
export default {
    getAllPosts: () =>
        axios.get(`${BASE_API_URL}/post`),
    getOnePost: (id) =>
        axios.get(`${BASE_API_URL}/post/${id}/edit`),
    addPost: (post) =>
        axios.post(`${BASE_API_URL}/post`, post),
}