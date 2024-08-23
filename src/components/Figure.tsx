import { type StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

export function Figure({ src, alt }: { src: StaticImport; alt: string }) {
  return (
    <figure>
      <Image src={src} alt={alt} />
      <figcaption className="!mt-0.5 !text-sm">{alt}</figcaption>
    </figure>
  );
}
