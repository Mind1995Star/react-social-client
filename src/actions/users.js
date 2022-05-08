import axios from 'axios';
import { ADMIN_PREFIX, LOGIN_PREFIX, SIGNUP_PREFIX, USER_PREFIX, PRODUCT_PREFIX, DELETE_PREFIX } from 'configs/app-config';
import { CheckLg } from 'react-bootstrap-icons';


export const signUp = async (params) => {
    const data = await axios.post(USER_PREFIX + SIGNUP_PREFIX, params);
    if (data.status === 200) {
        return 1;
    }
}

export const signIn = async (params) => {
    const data = await axios.post(USER_PREFIX + LOGIN_PREFIX, params);
    if (data.status === 200) {
        return 1;
    }
}

export const adminSign = async (params) => {
    const data = await axios.post(ADMIN_PREFIX + USER_PREFIX + LOGIN_PREFIX, params);
    if (data.status === 200) {
        return 1;
    }
}

export const productEdit = async (params) => {
    const data = await axios.post(USER_PREFIX + SIGNUP_PREFIX, params);
    if (data.status === 200) {
        return 1;
    }
}

export const productDelete = async (params) => {
    const data = await axios.post(ADMIN_PREFIX + PRODUCT_PREFIX + DELETE_PREFIX, params);
    if (data.status === 200) {
        return 1;
    }
}