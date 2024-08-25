import { MainSection } from '@/components/MainSection';

export function BioSection() {
  return (
    <MainSection>
      <blockquote>🚧 작성 중으로 일부 내용은 정확하지 않을 수 있습니다.</blockquote>
      <h1>
        안녕하세요,
        <br />
        프론트엔드 개발자 <span className="underline decoration-primary underline-offset-8">이다용</span>
        입니다.
      </h1>
      <p>
        자바스크립트 그리고 자동화에 관심이 많은 프론트엔드 개발자이며, 사용자 중심으로 개발하는 것을 좋아합니다.
        사용자에는 동료 또는 개발자도 포함되며, 중복 및 불필요한 일을 최소화한 단순함이 사용자 경험에 중요하다고
        생각합니다. 최근에는 ECMAScript의 제안서와 명세서를 통해 동작 원리와 새로운 기능을 익히고 있으며, 오픈 소스
        기여를 통해 학습한 내용을 활용하고 있습니다.
      </p>
    </MainSection>
  );
}
