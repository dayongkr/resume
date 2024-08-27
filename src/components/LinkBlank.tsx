import { cn } from '@/libs/utils';

export function LinkBlank({
  children,
  href,
  className,
  small,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  className?: string;
  small?: boolean;
}>) {
  return (
    <a
      className={cn('underline', small && 'smallLink', className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
