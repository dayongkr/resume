'use client';

import { LinkBlank } from '@/components/LinkBlank';
import { usePrint } from '@/libs/hooks/usePrint';

export function PrintBanner() {
  const isPrint = usePrint();

  return (
    isPrint && (
      <blockquote className="absolute top-0">
        이 이력서의 최신 버전은 <LinkBlank href="https://dayongkr.github.io">웹 사이트</LinkBlank>에서 확인하실 수
        있습니다.
      </blockquote>
    )
  );
}
