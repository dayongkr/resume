import { MainSection } from '@/components/MainSection';

export function BioSection() {
  return (
    <MainSection>
      <h1 className="mb-6 !leading-tight md:mb-14">
        안녕하세요,
        <br />
        프론트엔드 개발자 <span className="mark">이다용</span>
        입니다.
      </h1>
      <p className="text-xl !leading-relaxed">
        저는 자바스크립트와 자동화에 관심이 많은 프론트엔드 개발자로, 사용자 중심의 개발을 좋아합니다. 여기서 사용자는
        동료 또는 개발자도 포함하며, 중복과 불필요한 작업을 최소화하는 단순함이 사용자 경험에 중요하다고 생각합니다.
        최근에는 ECMAScript의 제안서와 명세서를 통해 자바스크립트의 동작 원리와 새로운 기능을 익히고 있으며, 오픈 소스
        기여를 통해 학습한 내용을 활용하고 있습니다.
      </p>
    </MainSection>
  );
}
