import axios from 'axios';
import store from '../../Redux/store';

const tokenAxios = axios.create();

tokenAxios.interceptors.request.use((request) => {
    const token = store.getState().loginReducer.newUser?.token;

    if (token) {
        request.headers = request.headers || {};
        request.headers['authorization'] = token;
    }

    return request;
});

export default tokenAxios;
