'use client';

import { Gallery } from '@/components/gallery/Gallery';
import useStore from '@/store';
import { FC } from 'react';

export const FavoriteMovies: FC = () => {
  const { favoriteMovies } = useStore();

  if (favoriteMovies?.length > 0) {
    return <Gallery movies={favoriteMovies} />;
  }

  return null;
};
