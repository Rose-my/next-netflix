'use client';

import { useState } from 'react';
import FooterNav from '@/components/common/FooterNav';
import SearchBar from '@/components/search/SearchBar';
import Movies from '@/components/search/Movies';
import { getSearchedMovies } from '@/api/getSearchedMovies';
import Trending from '@/components/search/Trending';

export default function Page() {
  const [searchedMovies, setSearchedMovies] = useState([]);

  const handleSearch = async (query: string) => {
    try {
      const data = await getSearchedMovies(query);
      setSearchedMovies(data.results);
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  return (
    <section className="flex flex-col pt-11">
      <SearchBar onSearch={handleSearch} />
      <p className="py-5 pl-2.5 fonts-bigtitle">Top Searches</p>
      {searchedMovies.length > 0 ? <Movies searchedMovies={searchedMovies} /> : <Trending />}
      <FooterNav />
    </section>
  );
}
