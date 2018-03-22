import axios from 'axios'

const instance = axios.create ({
    baseURL: 'https://react-my-burger-cd558.firebaseio.com/'
})

export default instance;