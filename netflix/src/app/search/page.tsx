import FooterNav from '@/components/common/FooterNav';
import Search from '@/components/search/SearchBar';
import Wrapper from '@/components/search/Wrapper';

export default function page() {
  // const wrapperItems = [
  //   { title: 'Continue Watching for Emenalo', fetchType: 'topRated' },
  //   { title: 'Popular on Netflix', fetchType: 'popular' },
  //   { title: 'Trending Now', fetchType: 'trending' },
  //   { title: 'Top Rated', fetchType: 'topRated' },
  //   { title: 'Horror Movies', fetchType: 'horrorMovies' },
  // ];

  return (
    <section className="flex flex-col pt-11">
      <Search />
      <p className=" py-5 pl-2.5 fonts-bigtitle">Top Searches</p>
      <section className="flex flex-col overflow-auto">
        <Wrapper />
        {/* {wrapperItems.map((item, index) => (
        <Wrapper key={index} title={item.title} fetchType={item.fetchType} />
      ))} */}
      </section>
      <FooterNav />
    </section>
  );
}
