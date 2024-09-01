import { List } from '@/components/List';
import { MainSection } from '@/components/MainSection';
import { SubDescription } from '@/components/SubDescription';
import { SubSection } from '@/components/SubSection';

export function EducationSection() {
  return (
    <MainSection title="교육">
      <SubSection title={{ text: '성균관대학교 소프트웨어학과', sub: { text: '4.09 / 4.5' } }}>
        <SubDescription date={{ from: { year: 2023, month: 3 }, to: { year: 2025, month: 2 } }} />
        <List
          items={[
            {
              children:
                'CS 지식에 대한 열망과 대학 진학을 제대로 준비해보지 못한 아쉬움으로, 전역 후 약 6개월간 독학하여 편입하였습니다.',
            },
            {
              children: '첫 학기에 개발 동아리에 참여하고 성적 우수상을 받는 등 새로운 환경에 빠르게 적응했습니다.',
            },
            {
              children:
                'xv6 운영체제와 리눅스 네트워크 모듈 개선 등 다양한 과제를 수행하고, 기계 학습과 HCI 등의 수업을 들으며 컴퓨터 공학 전반에 대한 기본 지식을 쌓았습니다.',
            },
          ]}
        />
      </SubSection>
      <SubSection title={{ text: '경민대학교 융합소프트웨어과', sub: { text: '4.5 / 4.5' } }}>
        <SubDescription date={{ from: { year: 2020, month: 3 }, to: { year: 2021, month: 2 } }} />
        <List
          items={[
            {
              children: '고등학생 때 해외 구매 대행 사업을 하면서 기술적인 한계를 느껴 대학에 진학하였습니다.',
            },
            {
              children: '구름 사의 데벨업 클럽에 신청하여, 동기들이 유료 강의를 무료로 들을 수 있도록 지원했습니다.',
            },
          ]}
        />
      </SubSection>
    </MainSection>
  );
}
