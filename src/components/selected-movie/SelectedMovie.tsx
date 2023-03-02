'use client';

import { queryClient } from '@/app/hooks/query-client';
import { getMovieById } from '@/lib/api';
import useStore from '@/store';
import { IMovie } from '@/types';
import { use } from 'react';
import { Button } from '../button/Button';
import { DefList } from '../def-list/DefList';

export const SelectedMovie = () => {
  const {
    selectedMovieId,
    favoriteMovies,
    addToFavorites,
    removeFromFavorites,
  } = useStore();
  let movie: IMovie | undefined;

  if (selectedMovieId) {
    movie = use(
      queryClient(selectedMovieId.toString(), () =>
        getMovieById(selectedMovieId)
      )
    );
  }

  const like = () => {
    console.log(movie);
    if (movie) {
      addToFavorites(movie);
    }
  };

  const unlike = () => {
    console.log(movie);
    if (movie && movie.id === selectedMovieId) {
      removeFromFavorites(selectedMovieId);
    }
  };

  const isFavorite = favoriteMovies.some((m) => m.id === selectedMovieId);

  if (movie) {
    return (
      <div className='flex flex-col gap-8 relative'>
        <DefList movie={movie} />
        <div>
          {!isFavorite && <Button onClick={like}>Add to favorites</Button>}
          {isFavorite && (
            <Button mode='danger' onClick={unlike}>
              Remove from favorites
            </Button>
          )}
        </div>
      </div>
    );
  }

  return null;
};
