import { cn } from '@/libs/utils';
import Link from 'next/link';

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

function Title({ title, subTitle, href }: Readonly<{ title: string; subTitle?: string; href?: string }>) {
  return (
    <h3 className="!mt-0">
      {title} {subTitle && <>({href ? <Link href={href}>{subTitle}</Link> : subTitle})</>}
    </h3>
  );
}

Title.displayName = 'Title';

function Item({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}

Item.displayName = 'Item';

type Date = { year: number; month: number };
function formatDateString(date: Date | 'current') {
  return date === 'current' ? '현재' : `${String(date.year).padStart(4, '20')}.${String(date.month).padStart(2, '0')}`;
}

function SubDescription({
  children,
  date,
}: Readonly<{ children: React.ReactNode; date?: { from: Date; to: Date | 'current' } }>) {
  return (
    <p className="text-sm md:text-base">
      {date && `${formatDateString(date.from)} ~ ${formatDateString(date.to)}`} / {children}
    </p>
  );
}

SubDescription.displayName = 'SubDescription';

SubSection.Splited = Splited;
Splited.Item = Item;
SubSection.SubDescription = SubDescription;
SubSection.Title = Title;
