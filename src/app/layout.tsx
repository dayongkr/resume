import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
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
    <html lang="en">
      <body className={pretendard.className}>
        <div className="flex items-center justify-center px-8 py-6 md:px-24 md:py-16">{children}</div>
      </body>
    </html>
  );
}
