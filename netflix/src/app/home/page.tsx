import FooterNav from '@/components/common/FooterNav';
import Wrapper from '@/components/home/Wrapper';
import Header from '@/components/home/Header';
import Today from '@/components/home/Today';

export default function page() {
  return (
    <div className="pb-8">
      <Header />
      <Today />
      <Wrapper title="Continue Watching for Emenalo" />
      <Wrapper title="Popular on Netflix" />
      <Wrapper title="Trending Now" />
      <Wrapper title="Top 10 in Nigeria Today" />
      <Wrapper title="My List" />
      <Wrapper title="African Movies" />
      <FooterNav />
    </div>
  );
}
