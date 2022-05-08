import axios from 'axios';
import { ADMIN_PREFIX, PRODUCT_PREFIX, ADD_PREFIX, GET_PREFIX, USER_PREFIX } from 'configs/app-config';


export const addProduct = async (params) => {
    const result = await axios.post(ADMIN_PREFIX + PRODUCT_PREFIX + ADD_PREFIX, params);
    if (result.status === 200) {
        return 1;
    }
}

export const getPublicProducts = async () => {
    const result = await axios.post(USER_PREFIX + PRODUCT_PREFIX + GET_PREFIX);
    if (result.status === 200) {
        return result.data;
    }
}

export const getAdminProducts = async () => {
    const result = await axios.post(ADMIN_PREFIX + PRODUCT_PREFIX + GET_PREFIX);
    if (result.status === 200) {
        return result.data;
    }
}
