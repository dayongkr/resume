import { List } from '@/components/List';
import { MainSection } from '@/components/MainSection';
import { SubSection } from '@/components/SubSection';

export function SkillSection() {
  return (
    <MainSection title="역량">
      <SubSection title={{ title: '프론트엔드' }}>
        <List
          items={[
            {
              children:
                '주로 React 기반의 프레임워크인 Next.js를 사용하며, 필요에 따라 Next.js의 소스 코드를 분석하여 내부 동작을 이해합니다.',
            },
            {
              children:
                'React Server Component, Suspense, Error Boundary 등을 활용하여 읽기 좋은 코드를 작성하고자 노력합니다.',
            },
            {
              children: '전역 상태 관리 라이브러리에 종속되지 않고, 상황에 따라 URL 파라미터와 클로저를 활용합니다.',
            },
            {
              children:
                '페이지 로딩 속도와 리소스 사용량을 최적화하기 위해 이미지, 폰트, 번들링 등을 최적화한 경험이 있습니다.',
            },
            {
              children:
                '불필요한 요소를 제거하여 DOM 트리를 간소화하고, 의미에 맞는 시맨틱 요소를 사용하여 웹 표준을 준수합니다.',
            },
          ]}
        />
      </SubSection>
      <SubSection title={{ title: '자바스크립트' }}>
        <List
          items={[
            {
              children: 'ECMAScript 명세서를 통해 내부 동작을 이해하고, 제안서를 통해 최신 기능을 파악합니다.',
            },
            {
              children: '레거시 코드를 최신 문법으로 리팩토링하고 성능을 개선한 경험이 있습니다.',
            },
            {
              children: 'Vitest와 MSW를 사용하여 테스트 코드를 작성하고, 목적에 맞게 타입을 정의할 수 있습니다.',
            },
            {
              children: 'Node.js의 모듈 시스템인 CJS와 ESM, 그리고 의존성에 대해 기본적인 이해가 있습니다.',
            },
            {
              children: 'Rollup을 사용하여 패키지를 번들링하고, 배포해 본 경험이 있습니다.',
            },
            {
              children:
                'Lookahead, Capture Group, Unicode Property Escape 등을 활용하여 정규 표현식을 작성할 수 있습니다.',
            },
          ]}
        />
      </SubSection>
      <SubSection title={{ title: '자동화' }}>
        <List
          items={[
            {
              children:
                'AST에 대한 이해를 바탕으로 jscodeshift를 사용하여 코드 변환 스크립트를 작성하고 ESLint 플러그인을 개발한 경험이 있습니다.',
            },
            {
              children: 'git diff와 xargs와 같은 명령어를 사용하여 변경된 파일만 작업하도록 최적화한 경험이 있습니다.',
            },
            { children: 'GitHub Actions와 CircleCI를 사용하여 CI/CD를 구축하고 개선한 경험이 있습니다.' },
            {
              children: 'Node.js의 fs 모듈 등을 활용해 스크래핑을 자동화하고 데이터를 가공한 경험이 있습니다.',
            },
          ]}
        />
      </SubSection>
    </MainSection>
  );
}
