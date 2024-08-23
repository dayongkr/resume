import { BioSection } from './_components/BioSection';
import { ProjectSection } from './_components/ProjectSection';
import { ActivitySection } from './_components/ActivitySection';
import { AwardSection } from './_components/AwardSection';
import { EducationSection } from './_components/EducationSection';
import { SkillSection } from './_components/SkillSection';
import { ContactSection } from './_components/ContactSection';
export default function Home() {
  return (
    <main className="container prose prose-lg break-keep dark:prose-invert md:prose-xl">
      <BioSection />
      <ProjectSection />
      <ActivitySection />
      <AwardSection />
      <EducationSection />
      <SkillSection />
      <ContactSection />
      <blockquote>끝까지 읽어주셔서 감사합니다, 오늘도 좋은 하루 보내세요.</blockquote>
    </main>
  );
}
