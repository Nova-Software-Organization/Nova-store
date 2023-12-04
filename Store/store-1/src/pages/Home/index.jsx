import { useEffect, useState } from 'react';
import BackToTop from '../../components/BackToTop';
import Loading from '../../components/Loading';
import ModalChat from '../../components/NavBar/components/Modals/chat/ModalChat';
import { useApiGetAll } from '../../context/get/ProducAllGetContext';
import Banner from './components/Banner';
import HeadlineCards from './components/Card';
import Category from './components/Category';
import Chat from './components/Chat/Chat';
import CardProduct from './components/Food';
import Form from './components/Form';
import Salutation from './components/Salutation';
import SliderProducts from './components/Slider';

export default function Home () {
  const [isLoading, setIsLoading] = useState(true);
  const { data, fetchDataAll } = useApiGetAll();
  const [foods, setFoods] = useState([...data]);

  useEffect(() => {
    if (data.length === 0 ) {
      fetchDataAll();
    }
  }, [ data ]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
            <Salutation />
            <SliderProducts />
            <HeadlineCards />
            <CardProduct title="Menu de itens" products = { foods } />
            <Category />
            <Form />
            <Banner />
            <Chat ModalChat={ModalChat} />
            <BackToTop />
        </>
      )}
    </>
  );
}
