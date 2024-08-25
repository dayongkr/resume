import { LinkBlank } from './LinkBlank';

export function SmallLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  return (
    <span className="not-prose text-sm underline opacity-80 transition-opacity hover:opacity-100">
      [<LinkBlank href={href}>{children}</LinkBlank>]
    </span>
  );
}
