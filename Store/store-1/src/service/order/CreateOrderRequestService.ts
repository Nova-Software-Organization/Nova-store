import { AxiosResponse } from "axios";
import { ORDER_CREATE_END_POINT } from "../../constants/baseAPI";
import api from "../api/api";

interface OrderDataParams {
  data: {
    customerName: string;
    customerEmail?: string;
    paymentMethod: string;
    items: Array<{
      id: string;
      quantity: string;
    }>;
    customerAddress: {
      customerNeighborhood: string;
      customerNumberHouse: string;
      customerCep: string;
      state: string;
      roa: string;
    };
    customerRequest: {
      Cpf: string;
      Password?: string;
      gender: string;
      lastname: string;
      email: string;
      phone: string;
    };
  };
}

export const generateOrderData = async (params: OrderDataParams) => {
  const { data } = params;

  const orderData = {
    orderRequest: {
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      paymentMethod: data.paymentMethod,
      items: data.items.map((product) => ({
        id: product.id,
        quantity: product.quantity,
      })),
    },
    customerAddress: {
      customerNeighborhood: data.customerAddress.customerNeighborhood,
      customerNumberHouse: data.customerAddress.customerNumberHouse,
      customerCep: data.customerAddress.customerCep,
      state: data.customerAddress.state,
      roa: data.customerAddress.roa,
    },
    customerRequest: {
      Cpf: data.customerRequest.Cpf,
      Password: data.customerRequest.Password,
      gender: data.customerRequest.gender,
      lastname: data.customerRequest.lastname,
      email: data.customerRequest.email,
      phone: data.customerRequest.phone,
    },
  };

  try {
    const response: AxiosResponse<OrderDataParams> = await api.post(
      ORDER_CREATE_END_POINT,
      orderData
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching ORDER CREATED');
  }
};
