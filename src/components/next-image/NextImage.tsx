import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

export const NextImage: FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  ...props
}) => {
  const imgUrl = src ? `${imageBaseUrl}/${src}` : '/no-image.png';
  return (
    <Image
      {...props}
      src={imgUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};
