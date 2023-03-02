'use client';

import { FC, use } from 'react';
import { queryClient } from '@/app/hooks/query-client';
import { searchMovies } from '@/lib/api';
import useStore from '@/store';
import SearchMoviesForm from './SearchMoviesForm';
import { SearchMoviesList } from './SearchMoviesList';
import { IMovieItem } from '@/types';

export const SearchMovies: FC = () => {
  const { searchTerm } = useStore();
  let results: IMovieItem[] = [];

  if (searchTerm) {
    const data = use(queryClient(searchTerm, () => searchMovies(searchTerm)));
    if (data) {
      results = data.results;
    }
  }

  return (
    <div className='flex flex-col gap-8'>
      <SearchMoviesForm />
      <SearchMoviesList searchTerm={searchTerm} searchResults={results} />
    </div>
  );
};
