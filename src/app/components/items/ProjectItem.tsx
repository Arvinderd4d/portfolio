import Image from 'next/image';

import Link from '@component/NoScrollLink';

type Props = {
  slug: string;
  image: string;
  title: string;
  support?: {
    slug: string;
    name: string;
  };
  xl?: boolean;
  isPrivate?: boolean;
};

export default function ProjectItem({
  slug,
  image,
  title,
  support,
  xl = false,
  isPrivate = false,
}: Props) {
  return (
    <Link href={`/portfolio/${support ? `${support.slug}/` : ''}${slug}`}>
      <div className="project-item group text-center">
        <div className="md:group-hover:scale-110 relative transition-all block text-center sm:pt-[5%] sm:px-[10%] sm:pb-[7%]">
          <Image
            src={image}
            width={xl ? 343 : 257}
            height={xl ? 533 : 400}
            alt={title}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div
          className={`${
            isPrivate === false ? 'text-white' : 'text-[red]'
          } text-base leading-5 sm:text-2xl`}
        >
          {title}
        </div>
        {support && (
          <div className="text-xs mt-1 sm:text-base md:text-sm lg:text-base uppercase">
            {support.name}
          </div>
        )}
      </div>
    </Link>
  );
}
