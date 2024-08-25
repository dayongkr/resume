export function Marking({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <span className="rounded-md bg-primary px-2 text-primary-foreground">{children}</span>;
}
