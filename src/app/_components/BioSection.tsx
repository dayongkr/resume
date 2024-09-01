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
      <p>
        <span className="text-primary font-bold">이다용: </span>저는 많은 사람들에게 도움이 되는 것을 만들고자 개발을
        시작했으며, 사용자 중심의 개발을 추구합니다. 여기서 사용자에는 동료와 개발자도 포함되며, 중복과 불필요한 작업을
        최소화한 단순함이 사용자 경험에 중요하다고 생각합니다. 또한, 서로 신뢰하며 자기 주도적으로 일할 수 있는 환경을
        선호합니다. 최근에는 ECMAScript를 이해하고, 자동화로 개발 생산성을 높이는 것에 관심이 있습니다.
      </p>
    </MainSection>
  );
}
