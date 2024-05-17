import type { Metadata } from 'next';
import './globals.css';
import FooterLine from '@/components/common/FooterLine';

export const metadata: Metadata = {
  title: 'next-netflix',
  description: 'netflix clone coding using next-JS',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <section className="children-container">
          {children}
          <FooterLine />
        </section>
      </body>
    </html>
  );
}
