import { LogoIcon } from '@/public/icon';

export default function Header() {
  return (
    <section className="fixed flex justify-between w-full h-[57px] mt-6 pl-4 pr-[21px]">
      <div className="flex w-[56.67px] h-[57px]">
        <LogoIcon />
      </div>
      <p className="flex flex-col items-center w-[84.46px] mt-[12.18px] fonts-headline">
        TV Shows
      </p>
      <p className="flex flex-col items-center w-[59.87px] mt-[12.18px] fonts-headline">
        Movies
      </p>
      <p className="flex flex-col items-center w-[60.94px] mt-[12.18px] fonts-headline">
        My List
      </p>
    </section>
  );
}
