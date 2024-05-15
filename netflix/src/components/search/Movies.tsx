import { PlayCircleIcon } from '@/public/icon';
import Image from 'next/image';
import { MovieTypes } from '@/types/Movie';

interface MoviesProps {
  searchedMovies: MovieTypes[];
}

export default function Movies({ searchedMovies }: MoviesProps) {
  return (
    <div className="flex flex-col w-full gap-2 mb-6">
      {searchedMovies &&
        searchedMovies.map((movie: MovieTypes) => (
          <div key={movie.id} className="flex bg-search-gray">
            <div>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                className="rounded-br-lg"
                width={200}
                height={100}
              />
            </div>

            <div className="flex justify-between items-center w-full px-4">
              <p className="fonts-searched">{movie.title}</p>
              <PlayCircleIcon />
            </div>
          </div>
        ))}
    </div>
  );
}
