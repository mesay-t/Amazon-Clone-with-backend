import axios from 'axios';

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'https://us-central1-clone-front-end-4fae3.cloudfunctions.net/api',
});

export default instance;

//https://us-central1-clone-front-end-4fae3.cloudfunctions.net/api