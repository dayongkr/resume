import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const pretendardSubset = localFont({
  src: '../fonts/PretendardVariable.subset.woff2',
  display: 'swap',
  weight: '75 920',
  style: 'normal',
});

export const metadata: Metadata = {
  title: '이력서 - 이다용 (Dayong Lee)',
  description: '안녕하세요, 프론트엔드 개발자 이다용입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={pretendardSubset.className}>
        <div className="px-8 py-6 md:px-24 md:py-16">{children}</div>
      </body>
    </html>
  );
}
