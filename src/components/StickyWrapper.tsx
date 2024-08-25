export function StickyWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="sticky top-8 overflow-y-auto">{children}</div>;
}
