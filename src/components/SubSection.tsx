import { cn } from '@/libs/utils';
import { LinkBlank } from '@/components/LinkBlank';
import { SmallLink } from './SmallLink';

export function SubSection({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <section className={cn('mb-16 md:mb-32', className)}>{children}</section>;
}

SubSection.displayName = 'SubSection';

function Splited({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SubSection className="grid gap-8 md:grid-cols-2">{children}</SubSection>;
}

Splited.displayName = 'SplitedSection';

function SplitedItem({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}

SplitedItem.displayName = 'SplitedItem';

type Date = { year: number; month: number };
function formatDateString(date: Date | 'current') {
  return date === 'current' ? '현재' : `${String(date.year).padStart(4, '20')}.${String(date.month).padStart(2, '0')}`;
}

function SubDescription({
  children,
  date,
}: Readonly<{ children: React.ReactNode; date?: { from: Date; to: Date | 'current' } }>) {
  return (
    <p className="not-prose text-sm opacity-80 md:text-base">
      {date && `${formatDateString(date.from)} ~ ${formatDateString(date.to)}`} / {children}
    </p>
  );
}

SubDescription.displayName = 'SubDescription';

function Title({ title, subTitle, href }: Readonly<{ title: string; subTitle?: string; href?: string }>) {
  return (
    <h3 className="!mt-0">
      {title} {subTitle && <>({href ? <LinkBlank href={href}>{subTitle}</LinkBlank> : subTitle})</>}
    </h3>
  );
}

Title.displayName = 'Title';

function List({ children, title }: Readonly<{ children: React.ReactNode; title?: string }>) {
  return (
    <>
      {title && <h4>{title}</h4>}
      <ul>{children}</ul>
    </>
  );
}

List.displayName = 'List';

function ListItem({ children, link }: Readonly<{ children: React.ReactNode; link?: { title: string; href: string } }>) {
  return (
    <li>
      {children} {link && <SmallLink href={link.href}>{link.title}</SmallLink>}
    </li>
  );
}

ListItem.displayName = 'ListItem';

SubSection.Splited = Splited;
SubSection.SplitedItem = SplitedItem;
SubSection.SubDescription = SubDescription;
SubSection.Title = Title;
SubSection.List = List;
SubSection.ListItem = ListItem;
