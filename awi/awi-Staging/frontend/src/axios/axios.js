import axios from 'axios';
//const axios = require('axios').default;

export default axios.create({
    baseURL : "http://localhost:3001", 
    'Content-Type': 'application/json'
})
