import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer';
import Navbar from '../../NavBar';

export default function DefaultLayout() {
  return (
    <>
        <Navbar />
            <Outlet />
        <Footer />
    </>
  )
}
