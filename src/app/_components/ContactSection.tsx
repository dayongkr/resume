import { MainSection } from '@/components/MainSection';
import Link from 'next/link';

export function ContactSection() {
  return (
    <MainSection>
      <h2>연락처</h2>
      <ul>
        <li>이메일 - dayongkr@gmail.com</li>
        <li>
          <Link href="https://github.com/dayongkr" target="_blank">
            깃허브
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/dayong-lee-240b53266" target="_blank">
            링크드인
          </Link>
        </li>
      </ul>
    </MainSection>
  );
}
