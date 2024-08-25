import { MainSection } from '@/components/MainSection';

export function SkillSection() {
  return (
    <MainSection>
      <h2>역량</h2>
      <h3>프론트엔드</h3>
      <ul>
        <li>
          주로 React 기반의 프레임워크인 Next.js를 사용하며, 함수의 순수성을 지키는 등 기본 원칙을 준수하여 이해하기
          쉬운 코드를 작성합니다.
        </li>
        <li>React Server Component 및 Suspense와 같은 React의 최신 기술을 활용할 수 있습니다.</li>
        <li>명시적으로 작성자의 의도를 파악할 수 있는 TypeScript와 같은 정적 타입 언어를 선호합니다.</li>
        <li>
          마크업 및 스타일링 작업 후 불필요한 요소는 제거하여 DOM tree를 간소화하고 의미에 맞는 시맨틱 요소를 사용하여
          웹 표준을 준수합니다.
        </li>
        <li>Jest, Vite, 그리고 Testing Library로 테스트 코드를 작성할 수 있습니다.</li>
        <li>URL 쿼리, 전역 상태 라이브러리, 그리고 웹 저장소 등을 상황에 맞게 적절히 사용합니다.</li>
        <li>브라우저의 작동 과정과 구성요소에 대해 기초적으로 이해하고 있습니다.</li>
        <li>Go 또는 Rust와 같은 언어로 기존 기술들을 대체하는 동향에 관심을 가지고 있습니다.</li>
      </ul>
      <h3>백엔드</h3>
      <ul>
        <li>Next.js의 Route Handlers 및 Express를 사용하여 간단한 웹 서버를 개발할 수 있습니다.</li>
        <li>SQL 또는 Prisma와 같은 ORM을 사용하여 데이터베이스를 제어 및 조작할 수 있습니다.</li>
      </ul>
      <h3>DevOps</h3>
      <ul>
        <li>GitHub Actions를 활용하여 CI를 구축할 수 있습니다.</li>
        <li>Vercel로 스테이징 서버를 배포하고 운영한 경험이 있으며 개발 경험을 중요시하여 좋아합니다.</li>
        <li>개발 비용이 적절하다고 판단이 되면 스크립팅 언어를 활용해 자동화합니다.</li>
      </ul>
      <h3>컴퓨터 공학</h3>
      <ul>
        <li>고급 언어로 작성된 코드는 사람이 읽기 쉬워야 한다고 생각합니다.</li>
        <li>Locality에 대한 이해를 바탕으로 캐시를 상황에 맞게 적절히 사용합니다.</li>
        <li>시간 복잡도뿐만 아니라 메모리 접근 등 비용이 많이 드는 연산자에 대한 이해를 바탕으로 코드를 작성합니다.</li>
        <li>퍼셉트론, 의사결정트리, 및 심층신경망 등의 인공지능 개념을 이해하고 있습니다.</li>
        <li>큰 문제를 작은 문제로 나누어 해결하는 분할정복 방식에 익숙합니다.</li>
        <li>문제의 엣지 케이스를 파악하거나 상황에 맞는 알고리즘을 선택할 수 있습니다.</li>
      </ul>
      <h3>기타</h3>
      <ul>
        <li>공식 문서, ChatGPT, 그리고 GitHub Copilot 등을 활용해 새로운 기술을 익히는 데 능숙합니다.</li>
        <li>전체적인 기술의 특징을 파악하고 하나씩 파고드는 탑 다운 방식으로 새로운 기술을 학습합니다.</li>
        <li>
          Notion, Teams, Figma, 그리고 Bruno 등의 협업 도구를 사용하는 데 익숙하며, Arc browser와 같은 새로운 도구들을
          사용해보는 것을 좋아합니다.
        </li>
        <li>문제 해결이 필요하거나 조직의 성장을 위한 일이라면 분야 상관없이 좋아하고 적극적으로 참여합니다.</li>
        <li>다른 분야의 팀원과 소통할 때 전문 용어는 가급적 피하며 상대방이 부담을 느끼지 않도록 소통합니다.</li>
        <li>GitHub Flow로 브랜치를 관리하고, 커밋 컨벤션을 지키며 협업합니다.</li>
        <li>협업을 위해서는 문서화가 필수라고 생각하며, ChatGPT 등을 활용하여 읽기 쉽게 작성하려 노력합니다.</li>
      </ul>
    </MainSection>
  );
}
