import { Link } from '../../types/props';
import { LinkBlank } from './LinkBlank';
import React from 'react';

type ListItem = { text: string; link?: Link; sub?: ListItem[] };

export function List({
  items,
  title,
}: Readonly<{
  items: ListItem[];
  title?: string;
}>) {
  return (
    <>
      {title && <h4>{title}</h4>}
      <ul>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem link={item.link}>{item.text}</ListItem>
            {item.sub && <List items={item.sub} />}
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

export function ListItem({ children, link }: Readonly<{ children: React.ReactNode; link?: Link }>) {
  return (
    <li>
      {children}{' '}
      {link && (
        <LinkBlank href={link.href} className="not-prose" small>
          {link.title}
        </LinkBlank>
      )}
    </li>
  );
}
