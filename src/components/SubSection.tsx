import { Link } from '../types/props';
import { Figure } from './Figure';
import { List, type ListItem } from './List';
import { LinkBlank } from '@/components/LinkBlank';
import { cn } from '@/libs/utils';
import type { StaticImageData } from 'next/image';

export function SubSection({
  children,
  title,
  description,
  activity,
  learned,
  skills,
  figures,
  className,
}: Readonly<{
  children?: React.ReactNode;
  title?: TitleProps;
  description?: string;
  activity?: ListItem[];
  learned?: string;
  skills?: ListItem[];
  figures?: { src: StaticImageData | string; alt: string }[];
  className?: string;
}>) {
  const mainContent = (
    <>
      {title && <SubSectionTitle {...title} />}
      {description && <p>{description}</p>}
      {activity && <List title="주요 활동" items={activity} />}
      {learned && (
        <>
          <h4>얻은 것</h4>
          <p>{learned}</p>
        </>
      )}
      {skills && <List title="사용한 기술" items={skills} />}
      {children}
    </>
  );

  return (
    <section className={cn('mb-16 md:mb-24', figures && 'grid gap-8 md:grid-cols-3', className)}>
      {figures ? (
        <>
          <div className="md:col-span-2">{mainContent}</div>
          <div className="stickyWrapper">
            {figures.map(({ src, alt }, i) => (
              <Figure key={i} src={src} alt={alt} />
            ))}
          </div>
        </>
      ) : (
        mainContent
      )}
    </section>
  );
}

type TitleProps = Readonly<{
  title: string;
  link?: { text: string; href?: string };
  sub?: { date?: { from: Date; to?: Date | 'current' }; link?: Link };
}>;

export function SubSectionTitle({ title, link, sub }: TitleProps) {
  return (
    <>
      <h3 className="!mt-0 !mb-1">
        {title} {link && <>({link.href ? <LinkBlank href={link.href}>{link.text}</LinkBlank> : link.text})</>}
      </h3>
      {sub && (
        <p className="not-prose text-sm opacity-80 md:text-base">
          {sub.date && `${formatDateString(sub.date.from)}`}
          {sub.date && sub.date.to && ` ~ ${formatDateString(sub.date.to)}`}
          {sub.link && (
            <>
              {' / '}
              <LinkBlank href={sub.link.href}>{sub.link.title}</LinkBlank>
            </>
          )}
        </p>
      )}
    </>
  );
}

type Date = { year: number; month: number };

function formatDateString(date: Date | 'current') {
  return date === 'current' ? '현재' : `${String(date.year).padStart(4, '20')}.${String(date.month).padStart(2, '0')}`;
}
