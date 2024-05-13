'use client';
import { useEffect, useState } from 'react';
import axios from '@/api/axios';
import request from '@/api/request';
import Image from 'next/image';

interface WrapperProps {
  title: string;
  fetchType: string; // 다른 종류의 영화 목록을 불러오기 위해 fetchType 추가
}

interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

export default function Wrapper(props: WrapperProps) {
  const { title, fetchType } = props;
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const urls: { [key: string]: string } = {
          trending: request.fetchTrending,
          topRated: request.fetchTopRated,
          horrorMovies: request.fetchHorrorMovies,
          default: request.fetchPopular,
        };
  
        // fetchType에 해당하는 URL을 가져오거나, 기본값으로 fetchPopular을 사용
        const url = urls[fetchType] || urls.default;
  
        const requests = await axios.get(url);
        setMovies(requests.data.results);
        return requests;
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, [fetchType]);

  return (
    <section className="flex flex-col h-[191px] w-[100%] gap-3.5 pl-3 mb-[22px]">
      <p className="ml-1 fonts-smalltitle">{title}</p>
      <div className="flex gap-2 overflow-auto">
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[103px] h-[161px] relative object-cover">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="title"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" // fill로 인한 sizes 추가.. 콘솔창 경고 없애기 위해..
              priority={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
