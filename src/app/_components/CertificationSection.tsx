import { List } from '@/components/List';
import { MainSection } from '@/components/MainSection';

export function CertificationSection() {
  return (
    <MainSection title="자격증">
      <List
        items={[
          { children: 'OPIc(English) IH - 2024.03' },
          { children: '삼성전자 DX S/W 역량테스트 B형(C++) - 2024.02' },
          { children: '정보처리산업기사 - 2022.09' },
          { children: '네트워크관리사 2급 - 2022.07' },
        ]}
      />
    </MainSection>
  );
}
