import { Figure } from '@/components/Figure';
import { List } from '@/components/List';
import { MainSection } from '@/components/MainSection';
import { SubDescription } from '@/components/SubDescription';
import { SubSection, SubSectionTitle } from '@/components/SubSection';
import codedang1 from '@public/codedang1.webp';
import codedang2 from '@public/codedang2.webp';
import codedang3 from '@public/codedang3.webp';

export function ProjectSection() {
  return (
    <MainSection title="프로젝트">
      <SubSection
        title={{ text: '오픈 소스 기여', sub: { text: 'es-toolkit', href: 'https://github.com/toss/es-toolkit' } }}
      >
        <SubDescription
          date={{ from: { year: 24, month: 7 }, to: 'current' }}
          link={{ title: '기여 이력', href: 'https://github.com/toss/es-toolkit/commits?author=dayongkr' }}
        />
        <p>
          es-toolkit은 Lodash의 느린 성능과 무거운 번들 크기를 개선한 자바스크립트 유틸리티 라이브러리입니다. 저는
          자바스크립트와 타입스크립트를 활용할 기회라고 생각하여 기여를 시작했으며, 남는 시간을 활용해 꾸준히 기여하고
          있습니다.
        </p>
        <List
          title="주요 활동"
          items={[
            {
              children:
                'Lodash의 테스트 코드를 프로젝트 환경에 맞게 변환하는 스크립트를 작성하는 등 반복적인 작업을 자동화하여 개발 생산성을 높였습니다.',
              link: {
                title: '해당 PRs',
                href: 'https://github.com/search?q=repo:toss/es-toolkit+type:pr++author:dayongkr+is:merged+%22script%22+OR+%22automate%22&type=pullrequests&s=created&o=desc',
              },
            },
            {
              children:
                'CI 과정에서 변경된 파일만 린트 작업을 수행하도록 설정하여, CI 실행 시간 및 비용을 절감했습니다.',
              link: {
                title: '해당 PRs',
                href: 'https://github.com/search?q=repo:toss/es-toolkit+type:pr++author:dayongkr+is:merged+ci&type=pullrequests&s=created&o=desc',
              },
            },
            {
              children:
                '객체를 복제하는 함수가 프로토타입까지 복제하도록 수정하는 등 자바스크립트에 대한 이해를 바탕으로 기존 함수를 개선했습니다.',
              link: {
                title: '해당 PRs',
                href: 'https://github.com/search?q=repo%3Atoss%2Fes-toolkit+type%3Apr++author%3Adayongkr+is%3Amerged+in%3Atitle+++NOT+%22compatibility+%22NOT+%22number+case%22++NOT+%22compat%22+NOT+%22sortBy%22+AND+%22feat%22+OR+%22modernize%22+&type=pullrequests&s=created&o=desc',
              },
            },
            {
              children:
                '유사한 기능을 가진 orderBy와 sortBy 함수가 별도로 구현되어 있던 것을 하나로 통합하고, 새로운 기능도 추가하여 개발자와 사용자 경험을 개선했습니다.',
              link: {
                title: '해당 PR',
                href: 'https://github.com/toss/es-toolkit/pull/407',
              },
            },
            {
              children: '최신 문법과 빌트인 함수를 활용해 성능을 개선하면서도 Lodash와 호환되는 함수를 구현했습니다.',
              link: {
                title: '해당 PRs',
                href: 'https://github.com/search?q=repo:toss/es-toolkit+type:pr++author:dayongkr+is:merged+in:title+test+OR+compat+OR+compatibility+NOT+script&type=pullrequests&s=created&o=desc',
              },
            },
            {
              children:
                '구현 우선순위를 정하기 위해 패키지 사용 정보를 수집하는 도구와 이를 시각화하는 사이트를 개발했습니다.',
              link: {
                title: '해당 사이트',
                href: 'https://dependents-tracker.vercel.app/',
              },
            },
          ]}
        />
        <h4>얻은 것</h4>
        <p>
          자주 사용되지 않는 케이스로 인해 성능이 저하되고 코드 복잡성이 높아진 Lodash 코드를 분석하면서, 오버
          엔지니어링을 경계하고 사용자 중심의 개발을 통해 유용한 기능을 제공하는 것이 중요하다는 것을 배웠습니다. 또한,
          명세서를 통해 빌트인 함수의 내부 동작을 파악하고, 타입스크립트와 코드 커버리지를 활용해 안정성을 높이는 경험을
          했습니다.
        </p>
        <List
          title="사용한 기술"
          items={[
            { children: '코어: TypeScript' },
            { children: '패키지 매니저: Yarn Berry' },
            { children: '테스트: Vitest' },
            { children: 'CI/CD: Github Actions, CircleCI' },
            { children: '코드 변환: Jscodeshift' },
          ]}
        />
      </SubSection>
      <SubSection grid>
        <div className="md:col-span-2">
          <SubSectionTitle
            title={{ text: '성균관대학교 코딩플랫폼', sub: { text: '코드당', href: 'https://codedang.com' } }}
          />
          <SubDescription
            date={{ from: { year: 23, month: 3 }, to: { year: 24, month: 8 } }}
            link={{ title: '깃허브 리포지토리', href: 'https://github.com/skkuding/codedang' }}
          />
          <p>
            코드당은 별도의 개발 환경 설치 없이 수업 시간에 프로그래밍 문제를 풀고, 알고리즘 경진 대회를 개최할 수
            있도록 지원하는 교내 코딩 플랫폼 서비스입니다. 이 서비스는 학부생들로 구성된 프론트엔드, 백엔드, 인프라,
            기획 및 디자인 팀이 함께 개발 및 운영하고 있습니다.
          </p>
          <List
            title="주요 활동"
            items={[
              {
                children:
                  '백엔드 서버에서 발급한 JWT를 SSR 서버와 사용자가 공유할 수 있도록 사용자 인증 부분을 구현했으며, 테스트 코드를 작성하여 안정성을 높였습니다.',
                link: {
                  title: '해당 PRs',
                  href: 'https://github.com/search?q=repo:skkuding/codedang+author:dayongkr+type:pr++state:closed+in:title+authentication&type=pullrequests&s=created&o=desc',
                },
              },
              {
                children:
                  '사용자 세션을 클라이언트와 서버 구분 없이 가져올 수 있도록 함수를 추상화하고, 클라이언트 측에서는 클로저를 활용해 캐싱 되도록 구현하여 개발자 경험을 향상하고 서버 부하를 줄였습니다.',
                link: {
                  title: '해당 PR',
                  href: 'https://github.com/skkuding/codedang/pull/1973',
                },
              },
              {
                children:
                  '이미지 부분을 최소화한 캐러셀 컴포넌트를 개발하고, 이미지 최적화 기능의 동작 원리를 파악하기 위해 Next.js의 소스 코드를 분석한 후 관련 정보를 공유하여 로딩 속도를 개선했습니다.',
                link: {
                  title: '정리한 글',
                  href: 'https://velog.io/@dayongkr/Next.JS%EC%9D%98-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B5%9C%EC%A0%81%ED%99%94-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0-%EB%B6%80%EC%A0%9C.-AVIF-%EB%A7%8C%EB%8A%A5%EC%9D%80-%EC%95%84%EB%8B%88%EB%8B%A4',
                },
              },
              {
                children:
                  '특정 페이지의 First Load JS 용량이 유난히 큰 것을 파악하고, Webpack Analyzer로 분석한 후 트리 쉐이킹이 되지 않는 부분을 수정하여 용량을 1.1MB에서 0.67MB로 줄였습니다.',
                link: {
                  title: '해당 PR',
                  href: 'https://github.com/skkuding/codedang/pull/1525',
                },
              },

              {
                children:
                  '통일성이 떨어진 프로젝트 구조를 개선하기 위해 토론을 주도하여, 동아리 상황에 맞는 프로젝트 구조에 대한 의견을 수렴하였습니다.',
                link: {
                  title: '개선안 문서',
                  href: 'https://www.notion.so/dayonglee/1-aa05976d60e84cdc87b423337d0b2a0c?pvs=4',
                },
              },
            ]}
          />
          <h4>얻은 것</h4>
          <p>
            28명의 동아리 부원과 함께 사용자가 있는 하나의 프로젝트를 1년 반 동안 개발하면서, 배경지식이 다른 팀들과
            소통하는 역량을 키울 수 있었습니다. 다만, 마감 일정에 쫓겨 코드 리뷰를 제대로 하지 않은 점이 아쉬웠으며,
            코드 리뷰를 통해 팀원 간 의견을 공유하는 것이 중요하다는 것을 몸소 깨달았습니다.
          </p>
          <List
            title="사용한 기술"
            items={[
              { children: '코어: Next.js, TypeScript' },
              {
                children: '상태 관리: Zustand',
              },
              { children: '스타일링: TailwindCSS' },
              { children: '패키지 매니저: PNPM' },
              { children: '테스트: Vitest, MSW' },
              { children: 'CI/CD: Github Actions' },
            ]}
          />
        </div>
        <div className="stickyWrapper">
          <Figure src={codedang1} alt="코드당 메인 화면" />
          <Figure src={codedang2} alt="코드당 문제 풀이 화면" />
          <Figure src={codedang3} alt="코드당 어드민 화면" />
        </div>
      </SubSection>
    </MainSection>
  );
}
