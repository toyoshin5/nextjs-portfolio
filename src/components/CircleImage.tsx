// Source Widget: CircleImage (circle_image.dart)

import Image from 'next/image';

interface CircleImageProps {
  src: string;
  size: number;
  hasBorder?: boolean;
  alt?: string;
}

export const CircleImage = ({ src, size, hasBorder = false, alt = 'Profile' }: CircleImageProps) => {
  return (
    <div
      className={`rounded-full overflow-hidden ${hasBorder ? 'border border-secondary' : ''}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover w-full h-full"
        unoptimized={src.startsWith('http')}
      />
    </div>
  );
};
