export function MainSection({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title?: string;
}>) {
  return (
    <section className="border-b">
      {title && <h2 className="border-l-4 border-primary pl-2">{title}</h2>}
      {children}
    </section>
  );
}
