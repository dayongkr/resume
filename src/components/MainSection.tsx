export function MainSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="border-b">{children}</section>;
}

MainSection.displayName = 'MainSection';

function Title({
  title,
}: Readonly<{
  title: string;
}>) {
  return <h2>{title}</h2>;
}

Title.displayName = 'Title';

MainSection.Title = Title;
