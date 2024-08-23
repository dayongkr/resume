export function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="border-b">{children}</section>;
}
