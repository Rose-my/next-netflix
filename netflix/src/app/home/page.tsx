import FooterNav from '@/components/common/FooterNav';
import PlayBtn from '@/components/common/PlayBtn';
import Wrapper from '@/components/home/Wrapper';
import Header from '@/components/home/Header';

export default function page() {
  return (
    <div className="pb-8">
      <Header />
      <PlayBtn width={303}></PlayBtn>
      <PlayBtn width={110.62}></PlayBtn>
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
