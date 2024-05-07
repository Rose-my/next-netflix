import FooterNav from '@/components/common/FooterNav';
import PlayBtn from '@/components/common/PlayBtn';

export default function page() {
  return (
    <section>
      <p className="fonts-headline">home페이지의 컴포넌트들이 올 자리, 리액트의 pages폴더의 역할</p>
      <PlayBtn width={303}></PlayBtn>
      <FooterNav />
    </section>
  );
}
