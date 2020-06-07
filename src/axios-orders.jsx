import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://burger-app-85985.firebaseio.com/'
})

export default instance;