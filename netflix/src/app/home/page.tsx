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
      <Wrapper title="Continue Watching for Emenalo" />
      <Wrapper title="Popular on Netflix" />
      <Wrapper title="Trending Now" />
      <Wrapper title="Top 10 in Nigeria Today" />
      <Wrapper title="My List" />
      <Wrapper title="African Movies" />
      <Wrapper title="Nollywood Movies & TV" />
      <Wrapper title="Netflix Originals" />
      <Wrapper title="Watch It Again" />
      <Wrapper title="New Releases" />
      <Wrapper title="TV Thrillers & Mysteries" />
      <Wrapper title="US TV Shows" />
      <FooterNav />
    </div>
  );
}
