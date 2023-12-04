import { AxiosResponse } from "axios";
import { AUTHENTICATION_REGISTER_END_POINT } from "../../constants/baseAPI";
import api from "../api/api";

interface RegisterCustomer {
    customerDTO: {
        name:string,
        lastname:string,
        cep:string,
        cpf:string,
        age:string,
        gender:string,
        email:string,
        phone:string
    },
    CustomerAddressDTO: {
        road:string,
        neighborhood:string,
        houseNumber:string,
        state:string,
        cep:string
    }
}

export const sendRegisterCustomer = async (request: Request): Promise<RegisterCustomer> => {
    try {
        const response: AxiosResponse<RegisterCustomer> = api.post(AUTHENTICATION_REGISTER_END_POINT + request);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};