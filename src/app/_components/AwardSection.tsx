import { List } from '@/components/List';
import { MainSection } from '@/components/MainSection';
import { SubDescription } from '@/components/SubDescription';
import { SubSection } from '@/components/SubSection';

export function AwardSection() {
  return (
    <MainSection title="수상">
      <SubSection title={{ text: 'Elice AI Edu 해커톤', sub: { text: '우수상' } }}>
        <SubDescription date={{ from: { year: 2023, month: 8 } }} />
        <List
          items={[
            {
              children:
                '2,000명 이상이 참여한 코딩 테스트를 통과하여 본선에 진출했고 완성도가 높다는 이유로 우수상을 받았습니다.',
            },
            {
              children:
                '팀에서 유일한 프론트엔드 개발자였고, 2일이라는 짧은 일정이었지만 프로젝트 매니저와 협력하여 기능별 우선순위를 정했습니다. 이에 주요 기능 위주로 개발을 완료하여 프로젝트의 완성도를 높일 수 있었습니다.',
            },
            {
              children: 'GPT API를 활용하여 개인 브랜딩에 대한 조언을 제공하는 서비스를 개발했습니다.',
            },
          ]}
        />
      </SubSection>
      <SubSection title={{ text: 'SW 중심대학 공동 해커톤', sub: { text: '우수상' } }}>
        <SubDescription date={{ from: { year: 2023, month: 6 } }} />
        <List
          items={[
            { children: '약 50개의 대학에서 개발자 4명과 디자이너 1명씩 참여한 해커톤에서 우수상을 받았습니다.' },
            {
              children:
                '이 행사에서는 각기 다른 대학의 참가자들이 한 팀을 이뤄야 하는 독특한 팀 빌딩 조건이 있었습니다.',
            },
            {
              children:
                '처음 만난 사람들과 소통을 통해 신뢰를 쌓고 같은 목표를 향해 나아가며, 취업을 포기한 청년과 구인에 어려움을 겪는 기업을 연결하는 과정을 간소화하는 웹사이트를 개발했습니다.',
            },
          ]}
        />
      </SubSection>
    </MainSection>
  );
}
