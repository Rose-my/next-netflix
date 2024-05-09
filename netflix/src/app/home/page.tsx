import FooterNav from '@/components/common/FooterNav';
import Wrapper from '@/components/home/Wrapper';
import Header from '@/components/home/Header';
import Today from '@/components/home/Today';
import Preview from '@/components/home/Preview';

export default function page() {
  return (
    <div className="pb-8">
      <Header />
      <Today />
      <Preview />
      <Wrapper title="Continue Watching for Emenalo" fetchType="topRated" />
      <Wrapper title="Popular on Netflix" fetchType="popular" />
      <Wrapper title="Trending Now" fetchType="trending" />
      <Wrapper title="Top 10 in Nigeria Today" fetchType="topRated" />
      <Wrapper title="Horror Movies" fetchType="horrorMovies" />
      <FooterNav />
    </div>
  );
}
