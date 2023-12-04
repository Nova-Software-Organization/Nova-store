import { useState } from "react";
import { useAuth } from "../../context/auth/AuthContext";
import useUserDataFetching from "../../hooks/Fetch/email/useUserDataFetching";
import ModalOrder from "./components/modalnformationOrder";


export default function MyRequests() {
  const { state } = useAuth();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { data, loading } = useUserDataFetching(state.email);

  const handleOrderClick = (products, ordersRequest) => {
    setSelectedOrder({ products, ordersRequest });
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'Long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };
  
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4 text-orange-600">Meus Pedidos</h1>
      {loading ? (
        <p className="text-orange-600 font-bold">Carregando pedidos...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data && data.ordersRequest && data.ordersRequest.length > 0 ? (
            data.ordersRequest.map((order, index) => (
              <div
                key={index}
                className="bg-white rounded-lg cursor-pointer border-none hover:scale-105 hover:duration-100"
              >
                <img
                  src={data.products[index].midia.url}
                  alt={data.products[index].name}
                  className="w-full h-52 object-cover rounded-lg border-none"
                />
                <div className="p-4">
                  <h1 className="text-black font-bold">
                    {data.products[index].name}
                  </h1>
                  <p className="text-black mb-2 font-bold">
                    {formatDate(order.datePayment)}
                  </p>
                  <p className="text-black mb-2 font-bold">
                    Total: R${order.totalValue.toFixed(2)}
                  </p>
                  <p className="text-black font-bold">Status: {order.status}</p>
                  <button className="text-orange-600 font-bold border-orange-600 mt-1" onClick={() => handleOrderClick(data.products[index], order)}>
                    Veja mais
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="h-screen">
              <p className="text-orange-600 font-bold text-lg">Nenhum pedido disponível.</p>
            </div>
          )}
        </div>
      )}

      <ModalOrder data={data} selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />
    </div>
  );
}

