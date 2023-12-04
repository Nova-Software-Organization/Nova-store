import { useEffect, useState } from 'react';

export default function UseFavorite ({ data }) {
  const [itens, setItens] = useState(false);

  useEffect(() => {
    const storedItens = JSON.parse(localStorage.getItem('itens'));
    if (storedItens) {
      setItens(storedItens);
    }
  }, [ storedItens ]);

  const addItem = (newItem) => {
    const updatedItens = [...itens, newItem];
    setItens(updatedItens);

    localStorage.setItem('itens', JSON.stringify(updatedItens));
  };
  
  const clearItems = () => {
    setItens([]);
    localStorage.removeItem('itens');
  };

  return {
      items: itens,
      addItem: addItem,
      clearItems: clearItems,
  }
}