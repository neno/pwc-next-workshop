'use client';

import { searchMovies } from '@/lib/api';
import useStore from '@/store';
import { IMovieItem } from '@/types';
import { use } from 'react';
import { Button } from '../button/Button';
import SearchMoviesForm from './SearchMoviesForm';
import { SearchMoviesList } from './SearchMoviesList';

export default function SearchMovies() {
  const { searchTerm } = useStore();
  let results: IMovieItem[] = [];

  if (searchTerm) {
    const data = use(searchMovies(searchTerm));
    results = data.results;
    // setSearchResults(data.results);
    // console.log('SearchMovies', searchTerm);
    // setSearchResults([]);
  }

  return (
    <div>
      <SearchMoviesForm />
      <SearchMoviesList searchTerm={searchTerm} searchResults={results} />
    </div>
  );
}
