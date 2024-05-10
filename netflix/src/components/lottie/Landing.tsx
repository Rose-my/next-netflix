'use client';

import Lottie from 'react-lottie-player';
import netflixAnimation from './netflixAnimation.json';
import { useRouter } from 'next/navigation';

export default function Landing() {
  const router = useRouter();

  return (
    <Lottie
      animationData={netflixAnimation}
      style={{ display: 'flex', justifyContent: 'center', width: '100vw', height: '50vh', marginTop: '12rem' }}
      play
      loop={false}
      onComplete={() => router.push('/home')}
    />
  );
}
