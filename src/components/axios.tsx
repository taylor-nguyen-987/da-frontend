import axios from 'axios';

// Creating an axios instance
const instance1 = axios.create({
    baseURL: 'https://daapi-dev.azurewebsites.net',
});
export default instance1;