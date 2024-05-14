
import { PlayCircleIcon } from '@/public/icon';
import Image from 'next/image';

export default function Wrapper() {


  return (
    <div className="flex w-full bg-search-gray">
      {/* <Image
        fill
        src={'/public/image/testImg-5'}
        alt="title"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" // fill로 인한 sizes 추가.. 콘솔창 경고 없애기 위해..
        priority
      /> */}
      <div className="w-[146px] h-[76px]"></div>
      <div className="flex justify-between items-center w-full py-6 px-3">
        <p className="fonts-searched">Hollywood</p>
        <PlayCircleIcon />
      </div>
    </div>
  );
}
