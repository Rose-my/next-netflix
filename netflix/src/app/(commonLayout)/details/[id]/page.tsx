import FooterNav from '@/components/common/FooterNav';
import Details from '@/components/details/details';
import { getMovieDetails } from '@/api/getMovies';

interface PageProps {
  params: {
    slug: string; // 'params' 객체 내에 'slug'라는 문자열 타입의 필드가 있음을 명시
  };
}

async function Page({ params }: PageProps) {
  const data = await getMovieDetails(params.slug);
  return (
    <>
      <Details data={data} />
      <FooterNav />
    </>
  );
}

export default Page;