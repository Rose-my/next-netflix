import Image from 'next/image';

interface WrapperProps {
  title: string;
}

export default function Wrapper(props: WrapperProps) {
  const { title } = props;

  return (
    <section className="flex flex-col h-[191px] w-[100%] gap-3.5 pl-3">
      <p className="ml-1 fonts-smalltitle">{title}</p>
      <div className="flex gap-2 overflow-auto">
        {/* 이런식으로 데이터 불러와서 map돌리면 됨 !!
        {images.map((result) => (
          <Image
            key={result.id}
            layout="responsive"
            src={url + result.path}
            height={161}
            width={103}
            alt={result.movieTitle}
          />
        ))} */}
      </div>
    </section>
  );
}
