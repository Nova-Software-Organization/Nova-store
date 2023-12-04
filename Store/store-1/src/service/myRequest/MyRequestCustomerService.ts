import { AxiosResponse } from "axios";
import { ACCOUNT_REQUEST_END_POINT } from "../../constants/baseAPI";
import api from "../api/api";

interface Token {
    email: String,
}

export const getUserRequest = async (request: Request): Promise<Token> => {
    try {
      const response: AxiosResponse<Token> = await api.get(ACCOUNT_REQUEST_END_POINT + request);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
};
