import axios from "axios";
import Swal from "sweetalert2";

export const createOrder = async (state, cart, data) => {
    try {
        const orderData = {
            orderRequest: {
                customerName: data.customerName,
                customerEmail: state.email || data.customerEmail,
                paymentMethod: data.paymentMethod,
                items: cart.map((product, index) => ({
                    productId: parseInt(product.id),
                    quantity: parseInt(product.quantity)
                }))
            },
            customerAddress: {
                road: data.customerAddress,
                neighborhood: data.customerNeighborhood,
                housenumber: data.customerNumberHouse,
                state: 'Estado',
                cep: data.customerCep,
            },
            clientRequest: {
                name: data.customerName,
                cpf: data.customerCpf,
                phone: '123456789',
                password: data.customerPassword || state.password,
                gender: '',
                lastName: data.customerLastName,
                email: state.email || data.customerEmail,
            },
        };

        const response = await axios.post('http://localhost:8080/v1/pedido/criar/pedido', orderData);

        if (response.status === 200 || response.status === 201) {
            const removeLocalStorageProduct = localStorage.removeItem('cart');
            window.location.href = '/pedido/sucesso';
        }

        console.log('Resposta do servidor:', response.data);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Ocorreu um erro ao criar o pedido',
            text: 'Por favor, tente novamente mais tarde!',
            confirmButtonColor: '#000',
          });

        console.error('Erro ao enviar os dados:', error);
    }
};