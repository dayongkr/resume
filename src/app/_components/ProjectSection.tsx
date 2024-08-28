import { Figure } from '@/components/Figure';
import { LinkBlank } from '@/components/LinkBlank';
import { MainSection } from '@/components/MainSection';
import { SubSection } from '@/components/SubSection';
import codedang1 from '@public/codedang1.webp';
import codedang2 from '@public/codedang2.webp';
import codedang3 from '@public/codedang3.webp';

export function ProjectSection() {
  return (
    <MainSection>
      <MainSection.Title title="프로젝트" />
      <SubSection>
        <SubSection.Title title="오픈 소스 기여" subTitle="toss/es-toolkit" href="https://github.com/toss/es-toolkit" />
        <SubSection.SubDescription
          date={{ from: { year: 24, month: 7 }, to: 'current' }}
          link={{ title: '기여 이력', href: 'https://github.com/toss/es-toolkit/commits?author=dayongkr' }}
        />
        <p>
          es-toolkit는 lodash의 느린 성능과 무거운 번들 사이즈를 개선한 자바스크립트 유틸리티 라이브러리입니다. 한국
          오픈 소스 문화에 기여 그리고 ECMAScript와 타입스크립트를 활용할 수 있는 기회라고 생각하여 시작했으며, 2024년
          8월 기준 커밋 횟수 2위로 꾸준히 기여하고 있습니다.
        </p>
        <SubSection.List
          title="주요 기여 내용"
          items={[
            {
              text: '객체를 복제하는 함수가 프로토타입도 복제하도록 수정하거나, 정수인지 확인할 때 네이티브 함수를 사용하도록 하는 등의 수정으로 안정성을 높였습니다.',
              link: {
                title: '해당 PRs',
                href: 'https://github.com/search?q=repo:toss/es-toolkit+type:pr++author:dayongkr+is:merged+in:title+++NOT+compatibility+NOT+%22number+case%22++NOT+compat+AND+feat+OR+modernize&type=pullrequests&s=created&o=desc',
              },
            },
            {
              text: 'lodash와 호환이 필요한 함수를 위해 lodash의 소스 코드와 테스트 코드를 기반으로 테스트 코드를 작성하고 호환을 위한 추가 동작을 구현했습니다.',
              link: {
                title: '해당 PRs',
                href: 'https://github.com/search?q=repo:toss/es-toolkit+type:pr++author:dayongkr+is:merged+in:title+test+OR+compat+OR+compatibility&type=pullrequests&s=created&o=desc',
              },
            },
            {
              text: 'CI 과정에서 변경된 파일만 린트 작업을 수행하도록 설정하여, CI 실행 시간을 단축했습니다.',
              link: {
                title: '해당 PRs',
                href: 'https://github.com/search?q=repo:toss/es-toolkit+type:pr++author:dayongkr+is:merged+ci&type=pullrequests&s=created&o=desc',
              },
            },
            {
              text: '깃허브 검색 서비스와 노션 차트를 활용하여, 어떤 함수가 많이 사용되는지 등을 분석 및 시각화하고 이를 메인테이너분에게 공유했습니다.',
              link: {
                title: '해당 노션 페이지',
                href: 'https://dayonglee.notion.site/es-toolkit-11f89d50abe84fc89811498cdfae63ab',
              },
              sub: [
                {
                  text: '현재는 해당 작업을 깃 그리고 Node.JS를 활용하여 데이터 수집을 자동화하고 웹으로 시각화하는 작업을 진행 중에 있습니다.',
                  link: { title: '해당 리포지토리', href: 'https://github.com/dayongkr/dependents-tracker' },
                },
              ],
            },
          ]}
        />
        <p>
          이러한 기여를 통해 ECMAScript의 잘 알려지지 않은 부분을 사용해보고, 타입스크립트의 타입가드 및 유틸리티 타입을
          활용할 수 있었습니다. 무엇보다도 내가 작성한 코드가 다른 개발자들에게 도움이 된다는 것이 가장 큰
          보람이었습니다.
        </p>
      </SubSection>
      <SubSection split>
        <div className="md:col-span-2">
          <SubSection.Title title="성균관대학교 코딩플랫폼" subTitle="코드당" href="https://codedang.com" />
          <SubSection.SubDescription
            date={{ from: { year: 23, month: 3 }, to: 'current' }}
            link={{ title: '깃허브 리포지토리', href: 'https://github.com/skkuding/codedang' }}
          />
          <p>
            코드당은 성균관대학교 학부생들이 별도의 개발 환경 설치 없이 수업 시간에 프로그래밍 문제를 풀고, 알고리즘
            경진 대회를 개최할 수 있는 등 학우들의 프로그래밍 역량을 향상하기 위한 교내 코딩 플랫폼 서비스입니다.
          </p>
          <p>
            2024년 1학기에 주요 기능 개발을 완료하여, 강의 시간에 약 70명의 재학생을 대상으로 회원가입과 문제 풀이 등
            베타 테스트를 수행했습니다. 이처럼 실 사용자 및 수요가 있는 프로젝트이며, 프론트엔드, 백엔드, 인프라 그리고
            기획 및 디자인팀이 협업하여 운영 및 개발하고 있습니다.
          </p>
          <SubSection.List
            title="주요 기여 내용"
            items={[{ text: '개발하는 사람이 자주 바뀐다는 동아리 상황에 맞추어, 폴더 구조 개선을 주도했습니다.' }]}
          />
        </div>
        <div>
          <div className="stickyWrapper">
            <Figure src={codedang1} alt="코드당 메인 화면" />
            <Figure src={codedang2} alt="코드당 문제 풀이 화면" />
            <Figure src={codedang3} alt="코드당 어드민 화면" />
          </div>
        </div>
      </SubSection>
    </MainSection>
  );
}
