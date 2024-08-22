import { H1 } from '@/components/typography/H1';
import { Ul } from '@/components/typography/Ul';

export default function Home() {
  return (
    <main className="w-full max-w-screen-md">
      <H1>
        안녕하세요,
        <br />
        이다용입니다.
      </H1>
      <Ul>
        <li>“인류에게 도움이 되는 것을 만들자”가 좌우명이며 “중용과 메타인지”을 중요하다고 믿고 있습니다.</li>
        <li>“성공하려면 도전과 실패가 필요”하다고 믿어 실패 비용이 적은 개발자의 길을 선택했습니다.</li>
        <li>
          특히 “사용자 경험을 어떻게 하면 향상” 시킬 수 있을지 고민하는 과정이 좋아 “프론트엔드 개발을 중심”으로
          공부했습니다.
        </li>
        <li>“기본에 충실”하기 위해 성균관대학교 소프트웨어학과로 편입하여 공학적 지식을 쌓고 있습니다.</li>
        <li>
          앞으로 “프론트엔드 개발 환경을 심도 있게 학습하고 개선”하여 인류에게 도움이 되는 것이 가능한 한 빠르고 많이
          나올 수 있도록 나아갈 것입니다.
        </li>
      </Ul>
    </main>
  );
}
