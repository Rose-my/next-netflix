'use client';

import Lottie from 'react-lottie-player';
import netflixAnimation from './netflixAnimation.json';
import { useRouter } from 'next/navigation';

export default function Landing() {
  const router = useRouter();

  return (
    <Lottie
      animationData={netflixAnimation}
      style={{ width: '100%', marginTop: '140px' }}
      play
      loop={false}
      onComplete={() => router.push('/home')}
    />
  );
}
