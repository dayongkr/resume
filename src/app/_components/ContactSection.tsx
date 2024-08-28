import { LinkBlank } from '@/components/LinkBlank';
import { MainSection } from '@/components/MainSection';

export function ContactSection() {
  return (
    <MainSection>
      <h2>연락처</h2>
      <ul>
        <li>이메일 - dayongkr@gmail.com</li>
        <li>
          <LinkBlank href="https://github.com/dayongkr">깃허브</LinkBlank>
        </li>
        <li>
          <LinkBlank href="https://www.linkedin.com/in/dayong-lee-240b53266">링크드인</LinkBlank>
        </li>
      </ul>
    </MainSection>
  );
}
