import { LinkBlank } from './LinkBlank';

export function SmallLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  return (
    <span className="text-sm">
      (<LinkBlank href={href}>{children}</LinkBlank>)
    </span>
  );
}
