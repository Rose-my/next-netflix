import { SmallSearchIcon, SmallXIcon } from '@/public/icon';

export default function SearchBar() {
  return (
    <form className="flex justify-between w-full h-[52px] py-4 px-5 bg-search-gray">
      <div className="flex items-center  ">
        <SmallSearchIcon className="pr-1" />
        <input
          type="text"
          className="block fonts-input bg-transparent w-[270px] px-2 focus:outline-none"
          placeholder=" Search for a show, movie, genre, e.t.c. "
        />
      </div>
      <SmallXIcon className="items-center" />
    </form>
  );
}
// className =
//   'w-[27rem] h-[3.1rem] bg-searchBar-main text-button-main placeholder-current text-[1.5rem] searchBar-text placeholder-text-center';
// placeholder = 'Search for a show, movie, e.t.c.';
// value = { searchText };
// onChange = { handleInputChange };
