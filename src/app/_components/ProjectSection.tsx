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
        title={{ text: '오픈 소스 기여', sub: { text: 'toss/es-toolkit', href: 'https://github.com/toss/es-toolkit' } }}
      >
        <SubDescription
          date={{ from: { year: 24, month: 7 }, to: 'current' }}
          link={{ title: '기여 이력', href: 'https://github.com/toss/es-toolkit/commits?author=dayongkr' }}
        />
        <p>
          es-toolkit은 Lodash의 느린 성능과 무거운 번들 크기를 개선하기 위해 만들어진 자바스크립트 유틸리티
          라이브러리입니다. 저는 자바스크립트와 타입스크립트를 활용할 기회라고 생각하여 기여를 시작했으며, 2024년 8월
          기준 커밋 횟수 2위로 꾸준히 기여하고 있습니다.
        </p>
        <List
          title="주요 기여 내용"
          items={[
            {
              children:
                '객체를 복제하는 함수가 프로토타입까지 복제하도록 수정했으며, 정수 여부를 확인할 때 네이티브 API를 사용해 함수의 안정성을 높였습니다.',
              link: {
                title: '해당 PRs',
                href: 'https://github.com/search?q=repo%3Atoss%2Fes-toolkit+type%3Apr++author%3Adayongkr+is%3Amerged+in%3Atitle+++NOT+%22compatibility+%22NOT+%22number+case%22++NOT+%22compat%22+NOT+%22sortBy%22+AND+%22feat%22+OR+%22modernize%22+&type=pullrequests&s=created&o=desc',
              },
            },
            {
              children:
                '유사한 기능을 가진 orderBy와 sortBy 함수가 별도로 구현되어 있던 것을 하나로 통합하고, 새로운 기능도 추가하여 개발자와 사용자 경험 모두를 개선했습니다.',
              link: {
                title: '해당 PR',
                href: 'https://github.com/toss/es-toolkit/pull/407',
              },
            },
            {
              children:
                'Lodash의 테스트 코드를 포팅하고, 구버전 문법으로 구현된 Lodash 함수를 최신 문법과 네이티브 API를 활용해 성능을 개선하면서도 Lodash와 호환되는 함수를 추가했습니다.',
              link: {
                title: '해당 PRs',
                href: 'https://github.com/search?q=repo:toss/es-toolkit+type:pr++author:dayongkr+is:merged+in:title+test+OR+compat+OR+compatibility&type=pullrequests&s=created&o=desc',
              },
            },
            {
              children:
                'CI 과정에서 변경된 파일만 린트 작업을 수행하도록 설정하여, CI 실행 시간 및 비용을 절약했습니다.',
              link: {
                title: '해당 PRs',
                href: 'https://github.com/search?q=repo:toss/es-toolkit+type:pr++author:dayongkr+is:merged+ci&type=pullrequests&s=created&o=desc',
              },
            },
            {
              children:
                '깃허브 검색 서비스와 노션 차트를 활용해 어떤 함수가 많이 사용되는지 분석 및 시각화하고, 이를 메인테이너 분에게 공유하여 개발 외적으로도 도움이 되도록 했습니다.',
              link: {
                title: '해당 노션 페이지',
                href: 'https://dayonglee.notion.site/es-toolkit-11f89d50abe84fc89811498cdfae63ab',
              },
              sub: [
                {
                  children:
                    '이 작업이 사용자 중심 개발과 동기부여에 도움이 된다고 판단하여, 데이터 수집을 자동화하고 웹으로 시각화하는 작업을 진행 중입니다.',
                  link: { title: '해당 리포지토리', href: 'https://github.com/dayongkr/dependents-tracker' },
                },
              ],
            },
          ]}
        />
        <p>
          위 기여를 통해 범용성이 높은 Lodash 코드를 분석하면서, 자주 사용되지 않는 케이스로 인해 성능 저하와 코드
          복잡성이 높아지는 문제를 확인했습니다. 이러한 경험에서 오버 엔지니어링을 경계하고, 사용자 중심의 개발을 통해
          유용한 기능을 제공하는 것이 중요하다는 것을 배웠습니다.
        </p>
        <List
          title="사용한 기술"
          items={[
            { children: '코어: Typescript' },
            { children: '패키지 매니저: Yarn Berry' },
            { children: '테스트: Vitest' },
            { children: 'CI/CD: Github Actions, CircleCI' },
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
            있도록 지원하는 교내 코딩 플랫폼 서비스입니다.
          </p>
          <p>
            2024년 1학기에는 약 70명의 학부생을 대상으로 정규 수업 중 회원가입과 문제 풀이 등의 베타 테스트를
            진행했습니다. 이처럼 학교의 명확한 수요와 사용자가 있는 프로젝트로, 학부생들로 구성된 프론트엔드, 백엔드,
            인프라, 기획 및 디자인 팀이 함께 개발 및 운영하고 있습니다.
          </p>
          <List
            title="주요 기여 내용"
            items={[
              {
                children:
                  'SSR 서버와 분리된 백엔드 서버에서 발급한 JWT를 SSR 서버와 사용자가 공유할 수 있도록 구현했으며, Vitest와 MSW를 사용해 테스트 코드를 작성하여 안정성을 높였습니다.',
                link: {
                  title: '해당 PRs',
                  href: 'https://github.com/search?q=repo:skkuding/codedang+author:dayongkr+type:pr++state:closed+in:title+authentication&type=pullrequests&s=created&o=desc',
                },
              },
              {
                children:
                  '사용자 세션을 클라이언트와 서버 구분 없이 가져올 수 있도록 함수를 추상화하고, 클로저를 활용해 클라이언트 측에서 캐싱되도록 구현하여 개발자 경험을 향상하고 서버 부하를 줄였습니다.',
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
                  'Vue.js에서 Next.js로 프레임워크를 전환하는 작업을 주도하며, 폴더 구조를 설계하고 학습하기 쉬운 기술 스택을 선택하여 두 달 안에 전환 작업을 완료했습니다.',
              },
              {
                children:
                  '성급한 개발로 발생한 코드 중복을 줄이고, 통일성 없는 폴더 구조를 개선하기 위해 팀 토론을 주도하며, 응집도 높은 폴더 구조를 가지도록 개선안을 제안했습니다.',
                link: {
                  title: '토론 기록',
                  href: 'https://www.notion.so/dayonglee/1-aa05976d60e84cdc87b423337d0b2a0c?pvs=4',
                },
              },
            ]}
          />
          <p>
            28명의 동아리 부원과 함께 사용자가 있는 하나의 프로젝트를 1년 반 동안 개발하면서, 배경지식이 다른 팀들과
            소통하는 역량을 키울 수 있었습니다. 다만, 프레임워크 전환 과정에서 마감에 쫓겨 코드 리뷰를 제대로 하지 못한
            점이 아쉬웠고 코드 리뷰를 통해 팀원 간 의견을 공유하는 것이 중요하다는 것을 배웠습니다.
          </p>
          <List
            title="사용한 기술"
            items={[
              { children: '코어: Next.JS, Typescript' },
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
