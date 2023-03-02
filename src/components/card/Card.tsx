'use client';

import useStore from '@/store';
import { IMovieItem } from '@/types';
import { FC } from 'react';
import { NextImage } from '../next-image/NextImage';

export const Card: FC<IMovieItem> = ({
  id,
  title,
  poster_path,
  release_date,
}) => {
  const { selectedMovieId, setSelectedMovieId } = useStore();
  return (
    <button
      className='inline-block w-full relative aspect-[2/3]'
      title={`${title} - (${release_date})`}
      onClick={() => setSelectedMovieId(id)}
    >
      <div
        className={`relative w-full h-full hover:shadow-xl shadow-primary bg-gray-300 ${
          selectedMovieId === id ? 'border-4 border-red-500' : ''
        }`}
      >
        <NextImage
          src={poster_path}
          alt={title}
          className='w-full h-full object-cover object-center'
          sizes='(min-width: 1280px) 640px, (min-width: 768px) 50vw, 100vw'
          width={640}
          height={960}
        />
      </div>
    </button>
  );
};
