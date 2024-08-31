import { LinkBlank } from '@/components/LinkBlank';
import { List } from '@/components/List';
import { MainSection } from '@/components/MainSection';
import { SubSection } from '@/components/SubSection';

export function ContactSection() {
  return (
    <MainSection title="연락처">
      <SubSection>
        <List
          items={[
            {
              children: '이메일 - dayongkr@gmail.com',
            },
            {
              children: <LinkBlank href="https://github.com/dayongkr">깃허브</LinkBlank>,
            },
            {
              children: <LinkBlank href="https://www.linkedin.com/in/dayong-lee-240b53266">링크드인</LinkBlank>,
            },
          ]}
        />
      </SubSection>
    </MainSection>
  );
}
