// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../components/Layout/DefaultTheme';

import { useApiGetAll } from '../context/get/ProducAllGetContext';
import Checkout from '../pages/Cart/Checkout';
import OrderFinalizeCheckout from '../pages/Cart/OrderCheckout';
import OrderSuccess from '../pages/Cart/OrderSuccess';
import Favorite from '../pages/Favorite';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import MyRequests from '../pages/Myrequests';
import NotFould from '../pages/NotFould';
import ProductPage from '../pages/ProductPage';
import Promotion from '../pages/Promotion';
import Register from '../pages/Register';
import Wallet from '../pages/Wallet';
import Admin from '../pages/admin';
import ListOrders from '../pages/admin/components/orders';

export default function Router () {
  const { data, fetchDataAll } = useApiGetAll();
  const [foods, setFoods] = useState([...data]);

  useEffect(() => {
    if (data.length === 0 ) {
      fetchDataAll();
    }
  }, [ data ]);
  
  return (
      <>
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFould />} />
              <Route path="/carteira" element={<Wallet />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registrar" element={<Register />} />
              <Route path="/cliente/conta/pedidos" element={<MyRequests />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cardapio" element={<Menu />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/pedidos" element={<ListOrders />} />
              <Route path ="/produto/promoçoes" element={<Promotion/> } />
              <Route path="checkout/finalizar" element={<OrderFinalizeCheckout />} />
              <Route path="/produto/favoritos" element={<Favorite /> } />
              <Route path="/produto/:productId" element={<ProductPage data = { data } />} />
              <Route path="/pedido/sucesso" element={<OrderSuccess />} />
            </Route>
        </Routes>
      </>
  )
}