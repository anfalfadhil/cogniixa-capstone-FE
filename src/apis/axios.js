import axios from 'axios';

export default axios.create({
    baseURL: 'https://ec2-52-205-204-127.compute-1.amazonaws.com'
})