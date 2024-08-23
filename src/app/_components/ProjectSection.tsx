import { Figure } from '@/components/Figure';
import { Section } from '@/components/Section';
import Link from 'next/link';
import codedang1 from '@/../public/codedang1.webp';
import codedang2 from '@/../public/codedang2.webp';
import codedang3 from '@/../public/codedang3.webp';

export function ProjectSection() {
  return (
    <Section>
      <h2>프로젝트</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <section>
          <h3 className="!mt-0">
            성균관대학교 코딩플랫폼 (<Link href="https://codedang.com">코드당</Link>)
          </h3>
          <p className="text-base">
            2023.03 ~ 현재 / <Link href="https://github.com/skkuding/codedang">깃허브 리포지토리</Link>
          </p>
          <p>
            성균관대학교 재학생들이 별도의 개발 환경 설치 없이 수업 시간에 프로그래밍 문제를 풀고, 알고리즘 경진 대회를
            개최할 수 있는 등 학우들의 프로그래밍 역량을 향상하기 위한 교내 코딩 플랫폼 서비스를 개발했습니다.
          </p>
          <p>
            2024년 1학기에 주요 기능 개발을 완료하여 강의 시간에 약 70명의 재학생을 대상으로 회원가입과 문제 풀이 등
            베타 테스트를 성공적으로 완료했습니다. 이처럼 사용자가 있는 프로젝트이며, 약 4명씩 팀원이 있는 프론트엔드,
            백엔드, 인프라, 기획 및 디자인팀이 협업하여 운영 및 개발하고 있습니다.
          </p>
        </section>
        <section>
          <Figure src={codedang1} alt="코드당 메인 화면" />
          <Figure src={codedang2} alt="코드당 문제 풀이 화면" />
          <Figure src={codedang3} alt="코드당 어드민 화면" />
        </section>
      </div>
    </Section>
  );
}
