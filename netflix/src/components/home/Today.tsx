'use client';
import { useEffect, useState } from 'react';
import axios from '@/api/axios';
import Image from 'next/image';
import request from '@/api/request';
import TopNImg from '@/public/icon/topN.svg';
import PlusImg from '@/public/icon/plus.svg';
import PlayBtn from '@/components/common/PlayBtn';
import InfoImg from '@/public/icon/info.svg';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

export default function Today() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [randomIndex, setRandomIndex] = useState<number | null>(null); // 랜덤 영화 인덱스 상태 추가
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null); 

  useEffect(() => {
    // 영화 정보를 불러오는 함수
    async function fetchMovies() {
      try {
        const requests = await axios.get(request.fetchTopRated);
        setMovies(requests.data.results);
        const newIndex = Math.floor(Math.random() * requests.data.results.length); // 랜덤 인덱스 생성
        setRandomIndex(newIndex);
        setRandomMovie(requests.data.results[newIndex]); // 랜덤 영화 선택
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <div className="w-full h-[415px] relative">
        <div className="absolute inset-0">
          {randomMovie && (
            <Image
              src={`https://image.tmdb.org/t/p/original${randomMovie.poster_path}`}
              alt={randomMovie.title}
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
        <div className="w-full h-full absolute bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>
      <section className="flex flex-row justify-center gap-[5px] pt-0.5">
        <TopNImg />
        {randomIndex !== null && (
          <div className="fonts-today">Top {randomIndex + 1} in Korea Today</div>
        )}
      </section>
      <section className="flex justify-between w-full h-[45px] mt-[11px] pl-[54px] pr-[62px]">
        <div className="flex flex-col items-center">
          <PlusImg />
          <div className="fonts-mainicon">My List</div>
        </div>
        <PlayBtn width={6.91406}></PlayBtn>
        <div className="flex flex-col items-center">
          <InfoImg />
          <div className="fonts-mainicon">Info</div>
        </div>
      </section>
    </div>
  );
}
