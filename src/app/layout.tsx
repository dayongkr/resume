import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const pretendardSubset = localFont({
  src: '../fonts/PretendardVariable.subset.woff2',
  display: 'swap',
  weight: '75 920',
  style: 'normal',
});

export const metadata: Metadata = {
  title: '이다용 - 이력서',
  description: '안녕하세요, 프론트엔드 개발자 이다용입니다.',
  category: 'resume',
  metadataBase: new URL('https://dayongkr.github.io'),
  openGraph: {
    description: '이력서를 공유해주셔서 감사합니다.',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={pretendardSubset.className}>
        <div className="px-6 py-6 md:px-8 md:py-16">{children}</div>
      </body>
    </html>
  );
}
