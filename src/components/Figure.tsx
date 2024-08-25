import { type StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

export function Figure({ src, alt }: { src: StaticImport; alt: string }) {
  return (
    <figure className="!mt-0">
      <Image src={src} alt={alt} className="overflow-hidden rounded-xl" />
      <figcaption className="!mt-1 !text-sm">{alt}</figcaption>
    </figure>
  );
}
