import { Link } from '../types/props';
import { LinkBlank } from './LinkBlank';
import { Fragment } from 'react';

type ListItem = { children: React.ReactNode; link?: Link; sub?: ListItem[] };

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
          <Fragment key={index}>
            <ListItem link={item.link} sub={item?.sub}>
              {item.children}
            </ListItem>
          </Fragment>
        ))}
      </ul>
    </>
  );
}

export function ListItem({
  children,
  link,
  sub,
}: Readonly<{ children: React.ReactNode; link?: Link; sub?: ListItem[] }>) {
  return (
    <li>
      {children}{' '}
      {link && (
        <LinkBlank href={link.href} className="not-prose" small>
          {link.title}
        </LinkBlank>
      )}
      {sub && <List items={sub} />}
    </li>
  );
}
