import { List } from '@/components/List';
import { MainSection } from '@/components/MainSection';
import { SubDescription } from '@/components/SubDescription';
import { SubSection } from '@/components/SubSection';

export function ActivitySection() {
  return (
    <MainSection title="활동">
      <SubSection title={{ text: '개발 동아리', sub: { text: '스꾸딩' } }}>
        <SubDescription date={{ from: { year: 2023, month: 3 }, to: 'current' }} />
        <List
          items={[
            {
              children:
                '교내 개발 동아리 중 기술적으로 가장 활발한 성균관대학교 코딩플랫폼 개발 동아리로 프론트엔드 (전) 멘토와 (현) 팀장 역할을 수행했습니다.',
            },

            {
              children:
                '지속적인 배포 일정 지연으로 기존 부원들 사이에서 동기 부여 문제가 생겨 이탈하는 상황에서도 끝을 보자는 집념으로 열심히 참여하여, 현재는 베타 테스트를 성공적으로 마치고 동아리 인원도 약 10명에서 30명 이상으로 성장하는 과정을 함께 했습니다.',
            },
            {
              children:
                '동아리 부원들과 함께 인프콘과 Go To Songdo 등의 컨퍼런스에 참여하며 개발 생태계를 탐색했습니다.',
            },
            {
              children:
                '주기적으로 사용하는 기술들의 업데이트 내용과 새로운 기술들을 팀원들에게 공유하여 기술적인 활력을 불어넣었습니다.',
            },
            {
              children:
                '신입 부원들을 위한 스터디 자료와 실습 프로젝트를 설계했으며, 이를 통해 기술적 배경지식이 적은 팀원과의 소통 능력을 향상했습니다.',
            },
            {
              children:
                '신뢰를 바탕으로 팀 문화를 팀장 주도 태스크 할당에서 자기 주도 태스크 할당으로 전환하여, 팀원들이 자율적이고 책임감 있게 일할 수 있는 환경을 조성하여 팀 생산성을 높였습니다.',
            },
            {
              children:
                '할당된 태스크는 담당자가 주도적으로 해결 방법을 찾고 구현하며, 문제 발생 시 해당 부분을 가장 잘 아는 사람인 해당 담당자가 책임지고 해결하도록 하는 문화를 만들어 팀의 생산성을 높였습니다.',
            },
          ]}
        />
      </SubSection>
    </MainSection>
  );
}
