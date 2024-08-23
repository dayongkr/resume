import { Section } from '@/components/Section';

export function BioSection() {
  return (
    <Section>
      <h1>
        안녕하세요,
        <br />
        프론트엔드 개발자 <span className="border-b-4 border-primary">이다용</span>입니다.
      </h1>
      <ul className="text-lg md:text-2xl">
        <li>
          첫 회사를 찾고 있는 성균관대학교 소프트웨어학과 4학년 학부생이며, 사용자 경험을 향상하는 것을 좋아합니다.
        </li>
        <li>사용자에는 동료 및 개발자도 포함되며, 단순함이 사용자 경험에 중요하다고 생각합니다.</li>
        <li>회사에 속한 개발자로서 회사의 목표를 우선시하며, 비용 대비 얻을 수 있는 가치가 큰 일을 선호합니다.</li>
      </ul>
    </Section>
  );
}
