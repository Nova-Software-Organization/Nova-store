// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import useFetch from '../../../../hooks/Fetch/product/UseFetchGet';
import ResultSearch from '../resultsarch';

export default function Search() {
  const { data } = useFetch('http://localhost:8080/v1/produto/todos');
  // Produção: const { data } = UseFetch('https://unable-insect-production.up.railway.app/produto/todos');
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    const filtered = data.filter((product) => product.name.includes(search));
    setFilteredProducts(filtered);
    setShowResults(search.length > 0);
  };
  
  return (
    <div className='w-[500px] sm:w-[500px] lg:w-[500px] mt-2 flex flex-col items-center'>
      <div className='bg-gray-200 rounded-full flex items-center justify-center px-2 w-full'>
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full outline-none"
          type="text"
          placeholder='Pesquisar alimentos'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyUp={handleSearch}
        />
      </div>
      <ResultSearch filteredProducts={filteredProducts} showResults={showResults} />
    </div>
  );
}
