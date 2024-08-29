import { LinkBlank } from '@/components/LinkBlank';
import { cn } from '@/libs/utils';

type Title = { text: string; sub?: { text: string; href?: string } };

export function SubSection({
  children,
  title,
  className,
  grid,
}: Readonly<{
  children: React.ReactNode;
  title?: Title;
  className?: string;
  grid?: boolean;
}>) {
  return (
    <section className={cn('mb-16 md:mb-24', grid && 'grid gap-8 md:grid-cols-3', className)}>
      {title && <SubSectionTitle title={title} />}
      {children}
    </section>
  );
}

export function SubSectionTitle({
  title,
}: Readonly<{
  title: Title;
}>) {
  const { text, sub } = title;
  return (
    <h3 className="!mt-0 !mb-1">
      {text} {sub && <>({sub.href ? <LinkBlank href={sub.href}>{sub.text}</LinkBlank> : sub.text})</>}
    </h3>
  );
}
