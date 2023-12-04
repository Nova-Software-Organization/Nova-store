import React from 'react';
import useFetch from '../../../../hooks/Fetch/product/UseFetchGet';

export default function ListOrders() {
  const { data } = useFetch('http://localhost:8080/v1/pedido/listar');

  return (
    <>
      <div className="bg-gray-200 p-4 h-screen">
        <div>
          <h1 className="text-2xl font-bold text-orange-600">Pedidos feitos este mês</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full mt-4">
            <thead className="rounded-md">
              <tr className="bg-black text-white mt-10">
                <th className="p-2">Número do pedido</th>
                <th className="p-2">Data da compra</th>
                <th className="p-2">Status</th>
                <th className="p-2">Valor total da compra</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((item) => (
                  <tr key={item.id}>
                    <td className="p-2">{item.numberOrder}</td>
                    <td className="p-2">{item.datePayment}</td>
                    <td className="p-2">{item.status}</td>
                    <td className="p-2">{item.totalValue}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-2 font-bold" colSpan="4">
                    Não há pedidos este mês.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
