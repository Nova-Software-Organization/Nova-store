import { AxiosResponse } from "axios";
import api from "../api/api";

interface ProductUnit {
    id:string
}

export const ChecktoSeeIfTheProductCartAvailable = async(request: Request) Promise<ProductUnit> => {
    try {
        const response: AxiosResponse<ProductUnit> = api.post();
        return Response.data;
    } catch (error) {
        throw new Error(error);
    }
}