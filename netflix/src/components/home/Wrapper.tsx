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
        let url = request.fetchPopular; // 기본값 설정
        if (fetchType === 'trending') {
          url = request.fetchTrending;
        } else if (fetchType === 'topRated') {
          url = request.fetchTopRated;
        } else if (fetchType === 'horrorMovies') {
          url = request.fetchHorrorMovies;
        }
        
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
          <div key={movie.id} className="min-w-[103px] h-[161px] relative"> // fill 레이아웃 위한 relative 추가
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              style={{ objectFit: 'cover' }} // 이미지 비율 유지를 위한 스타일 지정
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" // fill로 인한 sizes 추가.. 콘솔창 경고 없애기 위해..
            />
        </div>
        ))}
      </div>
    </section>
  );
}
