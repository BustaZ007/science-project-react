import axios from "axios";
import { deleteCookie } from "./utils.jsx";

const HOST = 'https://science-project.ru/';
const API = axios.create({
    baseURL : 'https://science-project.ru:5000/',
    withCredentials : true
});

API.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if(error.response){
        if(error.response.status === 401){
            window.location = '/login';
            localStorage.removeItem('__role');
            deleteCookie('session');
        }
    }
    return Promise.reject(error);
});

const ResponseStatus = {
    SUCCES: 'succes',
    ERROR: 'error'
}

export {API, ResponseStatus, HOST};