import { ActivitySection } from './_components/ActivitySection';
import { AwardSection } from './_components/AwardSection';
import { BioSection } from './_components/BioSection';
import { CertificationSection } from './_components/CertificationSection';
import { ContactSection } from './_components/ContactSection';
import { PrintBanner } from './_components/PrintBanner';
import { ProjectSection } from './_components/ProjectSection';

export default function Home() {
  return (
    <main className="container prose prose-lg break-keep dark:prose-invert !max-w-3xl">
      <PrintBanner />
      <BioSection />
      <ProjectSection />
      <AwardSection />
      <ActivitySection />
      <CertificationSection />
      <ContactSection />
      <blockquote className="text-base">
        더 궁금하신 부분이 있으시다면, 상단 연락처로 연락주시면 감사하겠습니다.
      </blockquote>
    </main>
  );
}
