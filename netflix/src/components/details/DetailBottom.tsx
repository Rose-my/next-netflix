import PlayBtn from '@/components/common/PlayBtn';

interface DetailBottomProps {
  overview: string;
}

export default function DetailBottom({ overview }: DetailBottomProps) {
  return (
    <section className="flex">
      <p className="fonts-details mt-6">{overview}</p>
    </section>
  )
}
