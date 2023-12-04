import { AxiosResponse } from "axios";
import { ORDER_CANCELLATION_END_POINT } from "../../constants/baseAPI";
import api from "../api/api";

interface OrderCancellation {
    numberOrder: String
}

export const orderCancellationUser = async (numberOrder: String): Promise<OrderCancellation> => {
    try {
      const response: AxiosResponse<OrderCancellation> = await api.post(ORDER_CANCELLATION_END_POINT + numberOrder);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching ORDER CANCELLATION');
    }
};