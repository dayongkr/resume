'use client';

import { LinkBlank } from '@/components/LinkBlank';
import { List } from '@/components/List';
import { MainSection } from '@/components/MainSection';
import { SubSection } from '@/components/SubSection';
import { usePrint } from '@/libs/hooks/usePrint';

export function ContactSection() {
  const isPrint = usePrint();
  return (
    <MainSection title="연락처">
      <SubSection>
        <List
          items={[
            isPrint ? { children: '010-3312-0920' } : null,
            {
              children: <LinkBlank href="mailto:dayongkr@gmail.com">dayongkr@gmail.com</LinkBlank>,
            },
            {
              children: <LinkBlank href="https://github.com/dayongkr">깃허브</LinkBlank>,
            },
            {
              children: <LinkBlank href="https://www.linkedin.com/in/dayongkr">링크드인</LinkBlank>,
            },
          ]}
        />
      </SubSection>
    </MainSection>
  );
}
