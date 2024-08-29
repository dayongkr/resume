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
          es-toolkit은 Lodash의 느린 성능과 무거운 번들 사이즈를 개선하기 위해 만들어진 자바스크립트 유틸리티
          라이브러리입니다. 저는 자바스크립트 및 타입스크립트를 활용할 수 있는 기회라고 생각하여 기여를 시작했으며,
          2024년 8월 기준 커밋 횟수 2위로 꾸준히 기여하고 있습니다.
        </p>
        <List
          title="주요 기여 내용"
          items={[
            {
              text: '객체를 복제하는 함수가 프로토타입까지 복제하도록 수정했으며, 정수 여부를 확인할 때 네이티브 API를 사용해 함수의 안정성을 높였습니다.',
              link: {
                title: '해당 PRs',
                href: 'https://github.com/search?q=repo%3Atoss%2Fes-toolkit+type%3Apr++author%3Adayongkr+is%3Amerged+in%3Atitle+++NOT+%22compatibility+%22NOT+%22number+case%22++NOT+%22compat%22+NOT+%22sortBy%22+AND+%22feat%22+OR+%22modernize%22+&type=pullrequests&s=created&o=desc',
              },
            },
            {
              text: '유사한 기능을 가진 orderBy와 sortBy 함수가 별도로 구현되어 있던 것을 하나로 통합하고, 새로운 기능도 추가하여 개발자와 사용자 경험 모두를 개선했습니다.',
              link: {
                title: '해당 PR',
                href: 'https://github.com/toss/es-toolkit/pull/407',
              },
            },
            {
              text: 'Lodash의 테스트 코드를 포팅하고, 구버전 문법으로 구현된 Lodash 함수를 최신 문법과 네이티브 API를 활용해 성능을 개선하면서도 Lodash와 호환되는 함수를 추가했습니다.',
              link: {
                title: '해당 PRs',
                href: 'https://github.com/search?q=repo:toss/es-toolkit+type:pr++author:dayongkr+is:merged+in:title+test+OR+compat+OR+compatibility&type=pullrequests&s=created&o=desc',
              },
            },
            {
              text: 'CI 과정에서 변경된 파일만 린트 작업을 수행하도록 설정하여, CI 실행 시간 및 비용을 절약했습니다.',
              link: {
                title: '해당 PRs',
                href: 'https://github.com/search?q=repo:toss/es-toolkit+type:pr++author:dayongkr+is:merged+ci&type=pullrequests&s=created&o=desc',
              },
            },
            {
              text: '깃허브 검색 서비스와 노션 차트를 활용해 어떤 함수가 많이 사용되는지 분석 및 시각화하고, 이를 메인테이너에게 공유하여 개발 외적으로도 도움이 되도록 했습니다.',
              link: {
                title: '해당 노션 페이지',
                href: 'https://dayonglee.notion.site/es-toolkit-11f89d50abe84fc89811498cdfae63ab',
              },
              sub: [
                {
                  text: '이 작업이 사용자 중심 개발과 동기부여에 도움이 된다고 판단하여, 데이터 수집을 자동화하고 웹으로 시각화하는 작업을 진행 중입니다.',
                  link: { title: '해당 리포지토리', href: 'https://github.com/dayongkr/dependents-tracker' },
                },
              ],
            },
          ]}
        />
        {/* TODO: 기여 후기 작성 */}
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
            인프라, 기획 및 디자인 팀이 함께 개발 및 운영하고 있습니다. 저는 프론트엔드 팀에서 다음과 같은 기여를
            했습니다.
          </p>
          <List
            title="주요 기여 내용"
            items={[
              { text: '개발하는 사람이 자주 바뀐다는 동아리 상황에 맞추어, 폴더 구조 개선을 주도했습니다.' },
              {
                text: 'SSR 서버와 분리된 백엔드 서버에서 발급한 JWT를 SSR 서버와 사용자가 공유할 수 있도록 하고, Vitest와 MSW를 사용한 테스트 코드를 작성하여 안정성을 높였습니다.',
              },
            ]}
          />
          <List
            title="주요 기여 내용"
            items={[
              { text: '개발하는 사람이 자주 바뀐다는 동아리 상황에 맞추어, 폴더 구조 개선을 주도했습니다.' },
              {
                text: 'SSR 서버와 분리된 백엔드 서버에서 발급한 JWT를 SSR 서버와 사용자가 공유할 수 있도록 하고, Vitest와 MSW를 사용한 테스트 코드를 작성하여 안정성을 높였습니다.',
              },
            ]}
          />
          <List
            title="주요 기여 내용"
            items={[
              { text: '개발하는 사람이 자주 바뀐다는 동아리 상황에 맞추어, 폴더 구조 개선을 주도했습니다.' },
              {
                text: 'SSR 서버와 분리된 백엔드 서버에서 발급한 JWT를 SSR 서버와 사용자가 공유할 수 있도록 하고, Vitest와 MSW를 사용한 테스트 코드를 작성하여 안정성을 높였습니다.',
              },
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
