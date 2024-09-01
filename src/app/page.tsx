import { ActivitySection } from './_components/ActivitySection';
import { AwardSection } from './_components/AwardSection';
import { BioSection } from './_components/BioSection';
import { CertificationSection } from './_components/CertificationSection';
import { ContactSection } from './_components/ContactSection';
import { EducationSection } from './_components/EducationSection';
import { PrintBanner } from './_components/PrintBanner';
import { ProjectSection } from './_components/ProjectSection';
import { SkillSection } from './_components/SkillSection';

export default function Home() {
  return (
    <main className="container prose prose-lg break-keep dark:prose-invert !max-w-3xl">
      <PrintBanner />
      <BioSection />
      <ProjectSection />
      <ActivitySection />
      <EducationSection />
      <AwardSection />
      <SkillSection />
      <CertificationSection />
      <ContactSection />
    </main>
  );
}
