'use client';
import { useEffect, useState } from 'react';
import axios from '@/api/axios';
import request from '@/api/request';
import Image from 'next/image';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

export default function Preview() {
  const [movies, setMovies] = useState<Movie[]>([]);
  
  useEffect(() => {
    // 영화 정보를 불러오는 함수
    async function fetchMovies() {
      try {
        const requests = await axios.get(request.fetchPopular);
        setMovies(requests.data.results);
        return requests;
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <section className="flex flex-col h-[145px] w-[100%] gap-[23px] pl-3 mb-[28px]">
      <p className=" fonts-bigtitle">Previews</p>
      <div className="flex gap-2 overflow-auto">
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[102px] h-[102px] relative rounded-full overflow-hidden"> // fill 레이아웃 위한 relative 추가
            <Image
              layout="fill"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              style={{ objectFit: 'cover' }} // 이미지 비율 유지를 위한 스타일 지정
              alt={movie.title}
            />
        </div>
        ))}
      </div>
    </section>
  )
}
