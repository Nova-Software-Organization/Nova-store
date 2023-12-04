import { AxiosResponse } from "axios";
import { CONTACT_NEWSLETTER_END_POINT } from "../../constants/baseAPI";
import api from "../api/api";

interface Contact {
    name:string,
    email:string,
    lastname:string
}

export const sendContactCustomer = async (request: Request): Promise<Contact> => {
    try{
        const response: AxiosResponse<Contact> = await api.post(CONTACT_NEWSLETTER_END_POINT + request);
        return response.data
    } catch(error) {
        throw new Error(error);
    }
};