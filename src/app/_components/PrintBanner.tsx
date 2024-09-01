'use client';

import { LinkBlank } from '@/components/LinkBlank';
import { usePrint } from '@/libs/hooks/usePrint';

export function PrintBanner() {
  const isPrint = usePrint();

  return (
    isPrint && (
      <blockquote className="absolute top-0">
        이력서를 검토해 주셔서 감사드리며, <LinkBlank href="https://dayongkr.github.io">dayongkr.github.io</LinkBlank>
        에서도 확인하실 수 있습니다.
      </blockquote>
    )
  );
}
