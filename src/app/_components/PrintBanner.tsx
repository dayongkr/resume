'use client';

import { LinkBlank } from '@/components/LinkBlank';
import { useEffect, useState } from 'react';

export function PrintBanner() {
  const [isPrint, setIsPrint] = useState(false);

  useEffect(() => {
    const handleBeforePrint = () => setIsPrint(true);
    const handleAfterPrint = () => setIsPrint(false);

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);
  return (
    isPrint && (
      <blockquote className="absolute top-0">
        이 이력서는 <LinkBlank href="https://dayongkr.github.io">웹 사이트</LinkBlank>에서도 확인하실 수 있습니다.
      </blockquote>
    )
  );
}
