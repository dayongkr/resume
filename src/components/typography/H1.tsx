export function H1({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <h1 className="scroll-m-20 text-5xl font-semibold tracking-tight md:text-6xl">{children}</h1>;
}
