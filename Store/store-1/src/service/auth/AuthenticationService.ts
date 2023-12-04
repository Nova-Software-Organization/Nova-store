import { AxiosResponse } from "axios";
import { AUTHENTICATION_LOGIN_END_POINY } from "../../constants/baseAPI";
import api from "../api/api";

interface Authentication {
    email:string,
    password:string
}

export const sendCustomerAuthenticationLogin = async (request: Request): Promise<Authentication> => {
    try{
        const response: AxiosResponse<Authentication> = await api.post(AUTHENTICATION_LOGIN_END_POINY + request);
        return response.data;
    } catch(error) {
        throw new Error(error);
    }
};