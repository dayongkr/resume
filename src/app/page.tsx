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
      {/* <ActivitySection />
      <AwardSection />
      <EducationSection />
      <SkillSection />
      <ContactSection /> */}
      <blockquote className="text-base">
        더 궁금하신 부분이 있으시다면, 상단 연락처로 연락주시면 감사하겠습니다.
      </blockquote>
    </main>
  );
}
