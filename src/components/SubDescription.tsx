import { Link } from '../types/props';
import { LinkBlank } from './LinkBlank';

type Date = { year: number; month: number };
function formatDateString(date: Date | 'current') {
  return date === 'current' ? '현재' : `${String(date.year).padStart(4, '20')}.${String(date.month).padStart(2, '0')}`;
}

export function SubDescription({ date, link }: Readonly<{ date?: { from: Date; to: Date | 'current' }; link?: Link }>) {
  return (
    <p className="not-prose text-sm opacity-80 md:text-base">
      {date && `${formatDateString(date.from)} ~ ${formatDateString(date.to)}`}
      {link && (
        <>
          {' / '}
          <LinkBlank href={link.href} small>
            {link.title}
          </LinkBlank>
        </>
      )}
    </p>
  );
}
