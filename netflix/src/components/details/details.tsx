import Image from "next/image";
import PlayBtn from '@/components/common/PlayBtn';

interface MovieDetails {
  backdrop_path: string; // 포스터 경로
  overview: string;    // 영화 개요
}

export default function details({ data }: { data: MovieDetails }) {
  return (
    <section className="flex flex-col w-full h-[415px] pl-8">
      <div className="absolute inset-0">
        {data.backdrop_path && (
          <Image
            fill
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt="title"
            style={{ objectFit: 'cover' }}
            priority
          />
        )}
      </div>
      <PlayBtn width={18.9375} />
      <p className="fonts-bigtitle mt-8">Previews</p>
      <p className="fonts-details mt-6">{data.overview}</p>
    </section>
  )
}
