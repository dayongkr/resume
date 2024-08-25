export function SplitedSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="grid gap-8 md:grid-cols-2">{children}</section>;
}

SplitedSection.displayName = 'SplitedSection';

function Item({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}

Item.displayName = 'SplitedSection.Item';

SplitedSection.Item = Item;
