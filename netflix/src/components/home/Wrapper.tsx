'use client';
import { useEffect, useState } from 'react';
import axios from '@/api/axios';
import request from '@/api/request';
import Image from 'next/image';

interface WrapperProps {
  title: string;
}

interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

export default function Wrapper(props: WrapperProps) {
  const { title } = props;
  const [movies, setMovies] = useState<Movie[]>([]);
  
  useEffect(() => {
    // 영화 정보를 불러오는 함수
    async function fetchMovies() {
      try {
        const requests = await axios.get(request.fetchPopular); // 여기서는 인기 영화를 예시
        setMovies(requests.data.results);
        return requests;
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <section className="flex flex-col h-[191px] w-[100%] gap-3.5 pl-3">
      <p className="ml-1 fonts-smalltitle">{title}</p>
      <div className="flex gap-2 overflow-auto">
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[103px] h-[161px]">
            <Image
              layout="fixed"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              height={161}
              width={103}
              alt={movie.title}
            />
        </div>
        ))}
      </div>
    </section>
  );
}
