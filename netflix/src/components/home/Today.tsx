import TodayImg from '@/public/image/todayImg.svg';
import TopNImg from '@/public/icon/topN.svg';
import PlusImg from '@/public/icon/plus.svg';
import PlayBtn from '@/components/common/PlayBtn';
import InfoImg from '@/public/icon/info.svg';

export default function Today() {
  return (
    <div>
      <div className="w-[424.05px] h-[415px] bg-gradient-to-b from-black via-black to-black"> {/* 그라데이션 효과 */}
        <TodayImg /> {/* api 연결 전 테스트 이미지 */}
      </div>
      <section className="flex flex-row justify-center gap-[5px]">
        <TopNImg />
        <div className="fonts-today">Today 텍스트 예시</div>
      </section>
      <section className="flex justify-between w-full h-[45px] mt-[11px] pl-[54px] pr-[62px]">
        <div className="flex flex-col items-center">
          <PlusImg />
          <div className="fonts-mainicon">My List</div>
        </div>
        <PlayBtn width={110.62}></PlayBtn>
        <div className="flex flex-col items-center">
          <InfoImg />
          <div className="fonts-mainicon">Info</div>
        </div>
      </section>
    </div>
  )
}
